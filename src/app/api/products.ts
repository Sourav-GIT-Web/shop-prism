// Create an API route to fetch products from an external API and return them as JSON
import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch('https://jsonfakery.com/products');
    const products = await response.json();
    return NextResponse.json(products);
}