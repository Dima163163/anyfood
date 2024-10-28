import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export function GET(request) {
  const path = request.nextUrl.searchParams.get('path');

  revalidatePath(path);

  return NextResponse.json({status: 'success', path});
}