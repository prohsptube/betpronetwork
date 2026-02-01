import type { Metadata } from 'next'
import Link from 'next/link'
import { FaWhatsapp, FaBook } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Cricket Betting Guide for Beginners in Pakistan | BetPro Network',
  description: 'Complete beginner-friendly guide to cricket betting in Pakistan. Learn betting basics, terms, strategies, and how to get started safely.',
  keywords: 'cricket betting guide, betting for beginners Pakistan, how to bet on cricket, online betting Pakistan, betting tips beginners',
}

export default function BeginnersGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-semibold mb-6 inline-flex items-center gap-2">
          ← Back to Blog
        </Link>
        
        <header className="mb-12 mt-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>January 25, 2026</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span className="text-purple-600 font-semibold">Beginners Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cricket Betting Guide for Beginners in Pakistan
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            New to cricket betting? This comprehensive guide covers everything from basic terms to advanced strategies for Pakistani bettors. Start your betting journey the right way!
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-96 flex items-center justify-center">
          <FaBook className="text-white text-9xl" />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Cricket Betting?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cricket betting is the act of predicting outcomes in cricket matches and placing money on those predictions. If your prediction is correct, you win money based on the odds offered. It's a way to add excitement to watching cricket while potentially earning profits.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Pakistan, cricket betting has become increasingly popular with the rise of online platforms like BetPro Network, which make it safe, convenient, and accessible to everyone.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Betting Terms You Must Know</h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Terms</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Odds:</strong> Numbers that show potential winnings. Higher odds = more profit but less likely to win</li>
              <li><strong>Stake:</strong> The amount of money you bet</li>
              <li><strong>Payout:</strong> Total money returned including your stake when you win</li>
              <li><strong>Bookmaker:</strong> Platform that offers betting (like BetPro Network)</li>
              <li><strong>Favorite:</strong> Team most likely to win (lower odds)</li>
              <li><strong>Underdog:</strong> Team less likely to win (higher odds)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cricket-Specific Terms</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Match Winner:</strong> Bet on which team will win the match</li>
              <li><strong>Top Batsman:</strong> Predict highest run-scorer in the match</li>
              <li><strong>Top Bowler:</strong> Predict highest wicket-taker</li>
              <li><strong>Total Runs:</strong> Bet on over/under a specific run total</li>
              <li><strong>Session Betting:</strong> Bet on runs scored in specific overs (common in Test cricket)</li>
              <li><strong>Live Betting:</strong> Placing bets while the match is in progress</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Odds (With Pakistani Examples)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let's say Pakistan is playing against England. The odds might look like this:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
            <li><strong>Pakistan to win: 2.00</strong> - If you bet ₨1,000 and Pakistan wins, you get ₨2,000 total (₨1,000 profit + ₨1,000 stake back)</li>
            <li><strong>England to win: 1.85</strong> - If you bet ₨1,000 and England wins, you get ₨1,850 total (₨850 profit + ₨1,000 stake back)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lower odds = team is favorite (more likely to win, less profit)<br />
            Higher odds = team is underdog (less likely to win, more profit)
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Get Started - Step by Step</h2>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Beginner's Roadmap</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Get Your BetPro ID</h4>
                  <p className="text-gray-700">
                    Message +92 300 1234567 on WhatsApp. Tell them you want a BetPro ID. The process takes less than 5 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Deposit Small Amount</h4>
                  <p className="text-gray-700">
                    Start with ₨500-1000. Learn the platform without risking too much. You can use EasyPaisa, JazzCash, or bank transfer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Place Your First Bet</h4>
                  <p className="text-gray-700">
                    Choose a simple "Match Winner" bet. Bet small (₨100-200). Focus on learning, not winning big immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Watch and Learn</h4>
                  <p className="text-gray-700">
                    Follow the match live. See how odds change. Understand why your bet won or lost. Take notes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Gradually Increase Knowledge</h4>
                  <p className="text-gray-700">
                    Try different bet types. Read our blog articles. Ask BetPro support for tips. Build experience slowly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Betting Markets for Beginners</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Match Winner (Easiest)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Simply pick which team will win. This is the simplest bet type and perfect for beginners. Research team form, head-to-head records, and home advantage before betting.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Top Batsman (Medium Difficulty)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Predict who will score the most runs. Look for batsmen in good form, opening batsmen (more deliveries to face), and those playing on their favorite ground.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Total Runs Over/Under (Medium Difficulty)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bet whether total runs will be above or below a set number. Consider pitch conditions, weather, and team batting strength.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Markets to Avoid as Beginner</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Session betting (too complex for beginners)</li>
              <li>• Fancy bets (requires advanced knowledge)</li>
              <li>• Multiple/accumulator bets (higher risk)</li>
              <li>• Specific over outcomes (too unpredictable)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Stick to simple bets for your first month. Master the basics before moving to complex markets.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Beginner-Friendly Betting Strategies</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategy 1: The 5% Rule</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Never bet more than 5% of your total budget on a single match. If you have ₨5,000, maximum bet should be ₨250. This protects you from big losses while you learn.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategy 2: Follow Pakistan Matches</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a Pakistani, you naturally know more about Pakistan cricket. Start by betting on Pakistan matches where you understand team dynamics, player form, and conditions.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategy 3: Keep a Betting Diary</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Write down every bet: amount, odds, reasoning, result. After 20-30 bets, review what worked and what didn't. This is how you improve.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategy 4: Use Free Resources</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Read BetPro Network blog, watch cricket analysis videos, follow expert tipsters. Knowledge is free—use it to make better decisions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Beginner Mistakes (And How to Avoid Them)</h2>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake: Betting with emotions</h4>
              <p className="text-gray-700">
                <strong>Example:</strong> "I love Pakistan, so I'll bet on them every match!"<br />
                <strong>Solution:</strong> Be objective. Sometimes betting against your favorite team is the smart move.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake: Chasing losses</h4>
              <p className="text-gray-700">
                <strong>Example:</strong> Lost ₨500, so betting ₨1,000 to "win it back quickly"<br />
                <strong>Solution:</strong> Take a break after 2-3 losses. Never increase bet size to recover losses.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake: Not researching</h4>
              <p className="text-gray-700">
                <strong>Example:</strong> Betting randomly without checking team news<br />
                <strong>Solution:</strong> Spend 10 minutes reading match preview, team news, weather forecast.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="font-bold text-red-900 mb-2">❌ Mistake: Betting on too many matches</h4>
              <p className="text-gray-700">
                <strong>Example:</strong> Betting on 10 different matches in one day<br />
                <strong>Solution:</strong> Focus on 1-2 matches you've researched well. Quality over quantity.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Money Management for Beginners</h2>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-green-900 mb-4">Smart Budget Plan for First Month</h4>
            <p className="text-gray-700 mb-4">
              Let's say you start with ₨5,000:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Week 1:</strong> Bet maximum ₨1,000 total (learn the platform)</li>
              <li>• <strong>Week 2:</strong> Bet maximum ₨1,000 total (try different bet types)</li>
              <li>• <strong>Week 3:</strong> Bet maximum ₨1,500 total (if you're winning consistently)</li>
              <li>• <strong>Week 4:</strong> Bet maximum ₨1,500 total (evaluate and adjust strategy)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Goal:</strong> Don't aim to double your money in month 1. Aim to learn without losing everything.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Different Cricket Formats</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">T20 Cricket (Best for Beginners)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Short format (3-4 hours)</li>
            <li>High scoring, exciting matches</li>
            <li>Good for live betting</li>
            <li>Examples: PSL, IPL, T20 World Cup</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ODI Cricket (Medium Difficulty)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>50 overs per side (6-8 hours)</li>
            <li>More strategic, balanced cricket</li>
            <li>Better for experienced bettors</li>
            <li>Examples: World Cup, Asia Cup, bilateral series</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Cricket (Advanced)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>5 days, complex format</li>
            <li>Requires deep cricket knowledge</li>
            <li>Session betting popular but complex</li>
            <li>Recommendation: Avoid until you have 6+ months experience</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Safe and Responsible Betting</h2>

          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-bold text-red-900 mb-4">Important Safety Rules</h4>
            <ul className="text-gray-700 space-y-3">
              <li>✓ Only bet money you can afford to lose</li>
              <li>✓ Never borrow money to bet</li>
              <li>✓ Set daily/weekly/monthly limits and stick to them</li>
              <li>✓ Take breaks - don't bet every day</li>
              <li>✓ If you feel you're developing a problem, stop and seek help</li>
              <li>✓ Betting should be entertainment, not income source</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Choose BetPro Network as a Beginner?</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
            <li><strong>Urdu Support:</strong> Get help in your language via WhatsApp 24/7</li>
            <li><strong>Low Minimum Bets:</strong> Start with as little as ₨50</li>
            <li><strong>Easy Deposits:</strong> Use EasyPaisa, JazzCash familiar to all Pakistanis</li>
            <li><strong>Learning Resources:</strong> Free betting tips and match analysis</li>
            <li><strong>Fast Withdrawals:</strong> Get your winnings quickly</li>
            <li><strong>Beginner-Friendly Interface:</strong> Simple, easy to understand platform</li>
            <li><strong>Welcome Bonus:</strong> Extra betting funds for new users</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your First Week Action Plan</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 1:</span>
                <span>Get BetPro ID, deposit ₨500, explore platform without betting</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 2:</span>
                <span>Place your first ₨100 match winner bet on a match you're watching</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 3:</span>
                <span>Try a Top Batsman bet (₨100). Read match preview first.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 4:</span>
                <span>Rest day. Review your bets. What worked? What didn't?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 5:</span>
                <span>Try live betting with ₨50. See how odds change during match.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 6:</span>
                <span>Place two ₨100 bets on different matches. Compare results.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">Day 7:</span>
                <span>Review entire week. Calculate profit/loss. Plan next week.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Betting Journey?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Get your BetPro ID in 5 minutes and start learning cricket betting the right way!
          </p>
          <a 
            href="https://wa.me/923000539152?text=Hi!%20I%20want%20to%20get%20a%20BetPro%20ID."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp: +92 300 0539152
          </a>
          <p className="mt-4 text-sm text-blue-100">
            Beginner-friendly | Urdu Support | Start with ₨50
          </p>
        </div>
      </article>
    </main>
  )
}
