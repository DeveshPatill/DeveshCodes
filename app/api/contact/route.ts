import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, enquiry_type, message } = body;

    if (!name || !email || !enquiry_type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (phone && !/^[\d\s\-\+\(\)]{10,}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    const validEnquiryTypes = ['Student / Private Coding Classes', 'Freelance / Website Development'];
    if (!validEnquiryTypes.includes(enquiry_type)) {
      return NextResponse.json(
        { error: 'Invalid enquiry type' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('enquiries')
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        enquiry_type,
        message: message.trim(),
      })
      .select('id')
      .single();

    if (error) {
      console.error('Supabase insert error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json(
        { error: 'Failed to save enquiry', details: error.message },
        { status: 500 }
      );
    }

    console.log('Supabase enquiry inserted successfully', { id: data?.id });

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}