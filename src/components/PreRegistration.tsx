import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Share2, Users } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  referrals: number;
}

const leaderboard: LeaderboardEntry[] = [
  { rank: 1, username: "DragonSlayer", points: 1500, referrals: 12 },
  { rank: 2, username: "MysticMage", points: 1200, referrals: 8 },
  { rank: 3, username: "ShadowHunter", points: 1000, referrals: 6 },
  { rank: 4, username: "LightKeeper", points: 800, referrals: 4 },
  { rank: 5, username: "StormBringer", points: 600, referrals: 3 },
];

const PreRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Join the Adventure Early</h2>

        {/* Pre-registration Form */}
        <div className="max-w-md mx-auto mb-16">
          {!isRegistered ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Enter your email to pre-register
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Pre-register Now
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-green-500/20 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Thank you for pre-registering!</h3>
              <p>Share with friends to earn more rewards</p>
            </motion.div>
          )}
        </div>

        {/* Rewards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-lg text-center"
          >
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Items</h3>
            <p>Get unique in-game items only available to pre-registered players</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-lg text-center"
          >
            <Share2 className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Referral Rewards</h3>
            <p>Earn special rewards for each friend you refer</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-lg text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Access</h3>
            <p>Be among the first to experience the game</p>
          </motion.div>
        </div>

        {/* Leaderboard */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Pre-registration Leaderboard</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 font-semibold">
              <div>Rank</div>
              <div>Username</div>
              <div>Points</div>
              <div>Referrals</div>
            </div>
            {leaderboard.map((entry) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: entry.rank * 0.1 }}
                className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 hover:bg-white/5"
              >
                <div>#{entry.rank}</div>
                <div>{entry.username}</div>
                <div>{entry.points}</div>
                <div>{entry.referrals}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreRegistration;