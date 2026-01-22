import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const WAKATIME_KEY = process.env.WAKATIME_API_KEY;

  try {
    const gitRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { next: { revalidate: 3600 } });
    const gitData = gitRes.ok ? await gitRes.json() : null;

    const wakaRes = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_KEY || '').toString('base64')}`
      },
      next: { revalidate: 3600 }
    });
    
    const wakaData = wakaRes.ok ? await wakaRes.json() : null;

    return NextResponse.json({
      github: {
        repos: gitData?.public_repos || 0,
        followers: gitData?.followers || 0,
      },
      wakatime: wakaData ? wakaData.data : null
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}