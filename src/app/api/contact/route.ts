import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { connectToDatabase } from '@/lib/mongodb';
import { Contact } from '@/models/Contact';

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 },
    );
  }

  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const userMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank You for Contacting Us!',
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Team`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      status: 200,
      success: true,
      message: 'Form submitted successfully.',
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Failed to process the request.' },
      { status: 500 },
    );
  }
}
