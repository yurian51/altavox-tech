import { NextResponse } from 'next/server'
export async function POST(request: Request){const body=await request.json().catch(()=>null);if(!body?.name||!body?.email||!body?.description||!/^\S+@\S+\.\S+$/.test(body.email))return NextResponse.json({error:'Invalid enquiry'}, {status:400});return NextResponse.json({error:'Inquiry delivery is not configured'}, {status:503})}
