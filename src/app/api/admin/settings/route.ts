import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { currentPassword, newUsername, newPassword } = await request.json()
    
    // Get current credentials from environment
    const CURRENT_USERNAME = process.env.ADMIN_USERNAME || 'admin'
    const CURRENT_PASSWORD = process.env.ADMIN_PASSWORD || 'betpro2026'
    
    // Verify current password
    if (currentPassword !== CURRENT_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Current password is incorrect' },
        { status: 401 }
      )
    }
    
    // Return success with instructions
    return NextResponse.json({
      success: true,
      message: `Credentials verified! Update these in Vercel:
      
🔹 Go to: https://vercel.com/muhammad-abdullahs-projects-98afe01c/betpronetwork/settings/environment-variables

${newUsername ? `🔹 Update ADMIN_USERNAME to: ${newUsername}` : ''}
${newPassword ? `🔹 Update ADMIN_PASSWORD to: ${newPassword}` : ''}

🔹 Save and redeploy your application

You can continue using your current credentials until you update Vercel.`
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error processing request' },
      { status: 500 }
    )
  }
}
