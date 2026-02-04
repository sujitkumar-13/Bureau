import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const isValid =
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD;

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create base64 token for Basic auth
    const token = Buffer.from(`${email}:${password}`).toString("base64");

    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error: any) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: error.message || "Login failed" },
      { status: 500 }
    );
  }
}
