"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

interface MCQ {
  question: string
  options: string[]
  correctAnswer: number
  angryHint: string
}



const mcqs: MCQ[] = [
  {
    question: "When we went to Sweet Affairs coffee shop, Humayun ne mazak mei kya cheez order ki thi?",
    options: [
      "Paye",
      "Naan Chanay",
      "Qeemay wala Naan",
      "Nihari"
    ],
    correctAnswer: 3,
    angryHint: "😡😡😡😡😡"
  },
  {
    question: "Who didn't play Jenga at third culture?",
    options: [
      "Rafay",
      "Saad",
      "Humayun",
      "Abdullah"
    ],
    correctAnswer: 2,
    angryHint: "SERIOUSLY?!"
  },
  {
    question: "What was Humayun doing during dance performances at second mehndi?",
    options: [
      "Playing chess with Saad",
      "Enjoying dances",
      "Scrolling reels on Instagram",
      "Clicking selfies"
    ],
    correctAnswer: 0,
    angryHint: "Are you waqai Humayun ya phir your memory is weak???"
  }
]

const hitMessages = [
  "Tap to Hitttt the ball!!!!",
  "Samjho ye ball Rafay hai",
  "Abhi tou game shuru hoi hai!",
  "Mayun bhai you can do thisss 😤",
  "Football is in your blood",
  "Humayun bhai tha GOATTTTTT",
  "Chalo chalo 😒",
  "21 baar karna hai!",
  "WOW!",
  "HIT.THE.BALL.",
  "GO MAYUN GO!",
  "Honay wala hai bas",
  "The grand finale is near! Don't stop!",
  "Bas almost ho gaya",
  "💪💪💪💪💪💪",
  "SO CLOSE!",
  "Acha bas aik aur",
  "Nakhray na karo. Hit it again 😾",
  "Acha aik aur....",
  "PROMISE YE LAST HAI 🥹",
  "Ho gayaaaaaa!!!",
]

const messageColors = [
  "from-pink-500/20 to-purple-500/20 border-pink-400/30",
  "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
  "from-green-500/20 to-emerald-500/20 border-green-400/30",
  "from-orange-500/20 to-red-500/20 border-orange-400/30",
  "from-violet-500/20 to-indigo-500/20 border-violet-400/30",
  "from-amber-500/20 to-yellow-500/20 border-amber-400/30",
  "from-rose-500/20 to-pink-500/20 border-rose-400/30",
  "from-teal-500/20 to-cyan-500/20 border-teal-400/30",
]

export default function BirthdayWish() {
  const [stage, setStage] = useState<"mcq" | "pinata" | "celebration">("mcq")
  const [currentMCQ, setCurrentMCQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showError, setShowError] = useState(false)
  const [hits, setHits] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(hitMessages[0])
  const [confetti, setConfetti] = useState<Array<{ id: number; type: string; x: number; y: number; rotation: number; delay: number; scale: number }>>([])
  const [showSparkles, setShowSparkles] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showShower, setShowShower] = useState(false)
  const [messagePosition, setMessagePosition] = useState({ x: 50, y: 80 })
  const [messageColor, setMessageColor] = useState(0)
  const [showVerified, setShowVerified] = useState(false)

  const [hidePivot, setHidePivot] = useState(false)
  const isSwingingRef = useRef(false)
  const currentAngleRef = useRef(0)

  const pendulumControls = useAnimation()
  const footballControls = useAnimation()

  useEffect(() => {
    const verified = localStorage.getItem("johnBdayVerified")
    if (verified === "true") {
      setStage("pinata")
    }
  }, [])

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    setShowError(false)
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return

    if (selectedAnswer === mcqs[currentMCQ].correctAnswer) {
  if (currentMCQ < mcqs.length - 1) {
    setTimeout(() => {
      setCurrentMCQ(currentMCQ + 1)
      setSelectedAnswer(null)
    }, 400)
  } else {
    // Show verified screen instead of going directly to pinata
    setTimeout(() => {
      setShowVerified(true)
    }, 400)
    
    // After 3 seconds, go to pinata
    setTimeout(() => {
      localStorage.setItem("johnBdayVerified", "false")
      setStage("pinata")
    }, 5000)
  }

    } else {
      setShowError(true)
    }
  }

  const handlePinataHit = async () => {
    const newHits = hits + 1
    setHits(newHits)
    setCurrentMessage(hitMessages[Math.min(newHits - 1, hitMessages.length - 1)])
    // Choose from safe zones (left, right, or bottom areas)
// Choose from safe zones with weighted probability (favor bottom)
const safeZones = [
  // Left side
  { x: Math.random() * 25 + 10, y: Math.random() * 50 + 10 },
  // Right side
  { x: Math.random() * 25 + 65, y: Math.random() * 50 + 10 },
  // Bottom center (below pendulum)
  { x: Math.random() * 40 + 30, y: Math.random() * 20 + 65 },
  // Bottom left (more weight)
  { x: Math.random() * 30 + 10, y: Math.random() * 20 + 65 },
  // Bottom right (more weight)
  { x: Math.random() * 30 + 60, y: Math.random() * 20 + 65 },
]

setMessagePosition(safeZones[Math.floor(Math.random() * safeZones.length)])

setMessageColor(Math.floor(Math.random() * messageColors.length))

    // Show sparkles
    setShowSparkles(true)
    setTimeout(() => setShowSparkles(false), 600)

    // Stop any current swing animation
    pendulumControls.stop()
    
    // FIX 4: REVERSE DIRECTION IF HIT WHILE SWINGING
    const currentAngle = currentAngleRef.current
    let targetDirection: number
    
    if (Math.abs(currentAngle) < 3) {
      // At rest - random direction
      targetDirection = Math.random() > 0.5 ? 1 : -1
    } else {
      // SWINGING - REVERSE THE DIRECTION!
      // If moving left (negative), swing right (positive)
      // If moving right (positive), swing left (negative)
      targetDirection = currentAngle > 0 ? -1 : 1
    }

    const maxSwing = (Math.random() * 10 + 25) * targetDirection // 25-35 degrees
    
    // Mark as swinging
    isSwingingRef.current = true
    currentAngleRef.current = maxSwing

    // Swing to max angle
    await pendulumControls.start({
      rotate: maxSwing,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    })

    // Football impact effect
    footballControls.start({
      scale: [1, 0.85, 1.15, 1],
      transition: { duration: 0.3 }
    })

    // If reached 21, do finale
    if (newHits >= 21) {
      setShowShower(true)
      setTimeout(() => setHidePivot(true), 1200) 
      isSwingingRef.current = false
      
      await pendulumControls.start({
        rotate: [maxSwing, maxSwing + 360, maxSwing + 720],
        scale: [1, 1.2, 0],
        opacity: [1, 1, 0],
        transition: { duration: 1.5, ease: "easeIn" }
      })

      const confettiItems = []
// Create 1000 items - random mix of all images
const imageTypes = ["football", "hums", "hums2", "hums3", "hums4"]
for (let i = 0; i < 1000; i++) {
  confettiItems.push({
    id: i,
    type: imageTypes[i % 5],
    x: Math.random() * 100,
    y: -20,
    rotation: Math.random() * 720,
    delay: Math.random() * 6,
    scale: Math.random() * 0.4 + 0.6
  })
}



      setConfetti(confettiItems)

      setTimeout(() => {
        setStage("celebration")
      }, 10000)
      
      return
    }

    // FIX 3: COMPLETE SWING - ALWAYS RETURN TO CENTER
    const swingBack = async () => {
      const dampedSwings = [
        { angle: -maxSwing * 0.7, duration: 0.7 },
        { angle: maxSwing * 0.45, duration: 0.6 },
        { angle: -maxSwing * 0.25, duration: 0.5 },
        { angle: maxSwing * 0.1, duration: 0.4 },
        { angle: 0, duration: 0.4 }
      ]

      // REMOVED THE BREAK - Always complete the swing
      for (const swing of dampedSwings) {
        currentAngleRef.current = swing.angle
        await pendulumControls.start({
          rotate: swing.angle,
          transition: {
            duration: swing.duration,
            ease: "easeInOut"
          }
        })
      }
      
      currentAngleRef.current = 0
      isSwingingRef.current = false
    }

    swingBack()
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/goal2.jpg')" }}
        />
                {/* BLACK OVERLAY DURING SHOWER */}
        <AnimatePresence>
          {showShower && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-[5]"
            />
          )}
        </AnimatePresence>

        {/* PARTICLES DURING SHOWER */}
        <AnimatePresence>
          {showShower && (
            <>
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-amber-400/60 rounded-full blur-[1px] z-[6]"
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                    y: -20 
                  }}
                  animate={{
                    y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        
        {/* Optional: Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.1)_0%,transparent_50%)]" />

        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
          }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: -10 
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {stage === "mcq" && (
          <motion.div
            key="mcq"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-lg mx-4"
          >
            <motion.div 
  className="relative backdrop-blur-md border border-white/[0.08] rounded-xl p-6"
  animate={{
    background: [
      'rgba(139, 92, 246, 0.10)',  // violet
      'rgba(59, 130, 246, 0.10)',   // blue
      'rgba(16, 185, 129, 0.10)',   // emerald
      'rgba(251, 191, 36, 0.10)',   // amber
      'rgba(236, 72, 153, 0.10)',   // pink
      'rgba(139, 92, 246, 0.10)',   // back to violet
    ]
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>


              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

              <div className="space-y-5">
                <div className="text-center space-y-3">
                  <motion.h1 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-light tracking-tight text-white/90"
                  >
                    STOP! 🖐
                  </motion.h1>
                  <p className="text-sm text-white/40">
                    Prove you're <span className="text-amber-400/90 font-medium">THE GOAT HUMAYUN</span> to continue
                  </p>

                  <div className="flex justify-center gap-2 pt-2">
                    {mcqs.map((_, index) => (
                      <div
                        key={index}
                        className={`h-0.5 transition-all duration-500 ${
                          index < currentMCQ
                            ? "w-6 bg-emerald-400/80"
                            : index === currentMCQ
                            ? "w-8 bg-amber-400/80"
                            : "w-6 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMCQ}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h2 className="text-base font-normal text-white/80">
                      {mcqs[currentMCQ].question}
                    </h2>

                    <div className="space-y-2">
                      {mcqs[currentMCQ].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`group relative w-full p-3 rounded-lg text-left font-normal transition-all duration-200 ${
                            selectedAnswer === index
                              ? "bg-amber-400/10 border-amber-400/40 text-white/90"
                              : "bg-white/[0.02] border-white/[0.06] text-white/60 hover:bg-white/[0.04] hover:border-white/10"
                          } border`}
                        >
                          <span className="relative z-10 text-sm">{option}</span>
                        </motion.button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {showError && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-3 rounded-lg bg-red-500/5 border border-red-400/20">
                            <p className="text-red-300/90 text-xs text-center">
                              {mcqs[currentMCQ].angryHint}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={handleAnswerSubmit}
                      disabled={selectedAnswer === null}
                      className={`w-full py-3 rounded-lg font-medium transition-all duration-200 text-sm ${
                        selectedAnswer === null
                          ? "bg-white/5 text-white/30 cursor-not-allowed"
                          : "bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white hover:from-amber-500 hover:to-orange-500"
                      }`}
                    >
                      {currentMCQ === mcqs.length - 1 ? "Continue →" : "Next →"}
                    </button>
                    
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* VERIFIED SUCCESS SCREEN */}
              <AnimatePresence>
  {showVerified && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md z-50"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8 p-8"
      >
        {/* Image with glow */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 150 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl" />
          <img 
            src="/hums.jpeg" 
            alt="Humayun" 
            className="w-36 h-36 rounded-full object-cover mx-auto shadow-2xl border-2 border-white/10 relative z-10"
          />
        </motion.div>
        
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-3"
        >
          <motion.h2 
  className="text-3xl font-bold text-white/95"
  animate={{ 
    opacity: [0.95, 1, 0.95]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Verified successfully! 🫡
</motion.h2>

          
          <div className="relative">
            <motion.p 
              className="text-2xl font-light text-white/60"
              initial={{ letterSpacing: "0.05em" }}
              animate={{ letterSpacing: ["0.05em", "0.1em", "0.05em"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              You're{" "}
              <motion.span 
                className="font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Mayun
              </motion.span>
            </motion.p>
          </div>
        </motion.div>

        {/* Minimal decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
            style={{ width: "200px" }}
            animate={{
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating emoji */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4"
        >
          {["⚽", "⚽", "⚽"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ 
                y: [0, -8, 0],
                
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

            </motion.div> 
          </motion.div>
          
        )}

        {stage === "pinata" && (
          <motion.div
            key="pinata"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full h-screen flex flex-col"
          >
            {!showShower && (
            <div className="flex-none pt-4 pb-2 px-4 text-center space-y-3">
              <motion.div 
                className="space-y-1"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl font-light text-white/90 tracking-tight">
                  Want to unlock the wish? 😼
                </h1>
                <p className="text-white/50 text-xs font-mono">
                  Click the football {2 - hits} more {2 - hits === 1 ? 'time' : 'times'}!
                </p>
              </motion.div>

              <div className="max-w-xs mx-auto">
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(hits / 2) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="mt-2 text-xs font-bold text-amber-400/80">
                  {hits} / 21 HITS! {Math.round((hits / 2) * 100)}%
                </p>
              </div>
            </div>
            )}

            {/* PENDULUM SYSTEM */}
<div className="flex-1 relative">
  {/* Pivot point at top center - IMAGE */}
  {!hidePivot && (
  <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: "10vh" }}>
    <img 
      src="/hums.jpeg" 
      alt="Pivot" 
      className="w-10 h-10 rounded-full object-cover shadow-lg"
    />
  </div>
  )}
  {/* Pendulum - rotates around pivot */}
  <motion.div
    animate={pendulumControls}
    className="absolute left-1/2"
    style={{
      transformOrigin: "top center",
      top: "10vh",
      marginLeft: "-1px"
    }}
  >
    {/* WHITE STRING - STRAIGHT LINE - BEHIND FOOTBALL */}
    <div className="absolute left-0" style={{ zIndex: -1, top: "20px" }}>
      <div 
        style={{
          width: "3px",
          height: "calc(30vh + 60px)",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0 4px rgba(255,255,255,0.8)"
        }}
      />
    </div>

    {/* FOOTBALL at end of string */}
    <motion.div
      animate={footballControls}
      className="absolute cursor-pointer select-none"
      onClick={handlePinataHit}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        top: "calc(30vh + 40px)",
        left: "-40px",
        zIndex: 10
      }}
    >
      <div className="text-[80px] filter drop-shadow-2xl">⚽</div>

      {showSparkles && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: 1
              }}
              animate={{
                x: Math.cos(i * Math.PI / 4) * 60,
                y: Math.sin(i * Math.PI / 4) * 60,
                opacity: 0,
                scale: 0.3
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-12px',
                marginTop: '-12px'
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  </motion.div>
</div>





{!showShower && (
<motion.div
  key={currentMessage}
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  transition={{ duration: 0.4 }}
  className="absolute z-30 pointer-events-none"
  style={{
    left: `${messagePosition.x}%`,
    top: `${messagePosition.y}%`,
    transform: 'translate(-50%, -50%)'
  }}
>
  <div className={`backdrop-blur-sm bg-gradient-to-br ${messageColors[messageColor]} rounded-xl p-4 shadow-2xl max-w-xs border`}>
    <p className="text-sm text-white font-medium text-center">
      {currentMessage}
    </p>
  </div>
</motion.div>
)}


            <AnimatePresence>
              {confetti.map((item) => (
  <motion.div
    key={item.id}
    className="absolute pointer-events-none z-50"
    initial={{ 
      x: `${item.x}vw`, 
      y: `${item.y}vh`, 
      opacity: 1, 
      scale: item.scale,
      rotate: 0 
    }}
    animate={{
      x: `${item.x}vw`,
      y: "120vh",
      rotate: item.rotation,
      opacity: [1, 1, 1, 0.8, 0]
    }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 5,
      delay: item.delay,
      ease: "linear"
    }}
  >
    {item.type === "football" ? (
  <div className="text-5xl">⚽</div>
) : (
  <img 
    src={`/${item.type}.jpeg`}
    alt={item.type}
    className="w-16 h-16 rounded-full object-cover"
  />
)}

  </motion.div>
))}

            </AnimatePresence>
          </motion.div>
        )}

        {stage === "celebration" && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full min-h-screen flex items-center justify-center p-4"
          >
            {confetti.map((item) => (
              <motion.div
                key={item.id}
                className="absolute text-4xl pointer-events-none"
                initial={{ 
                  x: "50vw", 
                  y: "30vh", 
                  opacity: 0, 
                  scale: 0 
                }}
                animate={{
                  x: `${item.x}vw`,
                  y: "110vh",
                  rotate: item.rotation,
                  opacity: [0, 1, 1, 0.7, 0],
                  scale: [0, item.scale * 1.2, item.scale, item.scale * 0.8]
                }}
                transition={{
                  duration: 5,
                  delay: item.delay,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {item.type}
              </motion.div>
            ))}

            <motion.div
              className="relative w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.12] rounded-2xl p-6 shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.h1 
                      className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-br from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent"
                      animate={{ 
                        textShadow: [
                          "0 0 20px rgba(251, 191, 36, 0)",
                          "0 0 40px rgba(251, 191, 36, 0.3)",
                          "0 0 20px rgba(251, 191, 36, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      HAPPY 21ST
                    </motion.h1>
                    <h2 className="text-2xl font-bold text-white/95 tracking-wide">
                      BIRTHDAY, JOHN! 🎉
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <p className="text-lg text-amber-400/90 font-semibold">
                      Welcome to the most EPIC year of your life!
                    </p>

                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      Today marks the beginning of your <span className="text-amber-400/90 font-semibold">21st chapter</span> — 
                      a year filled with <span className="text-orange-400/90 font-semibold">unforgettable adventures</span>, 
                      incredible success, and boundless joy.
                    </p>

                    <div className="pt-2 pb-1">
                      <p className="text-base text-white/90 font-medium italic">
                        "May this year bring you everything you've dreamed of and more!"
                      </p>
                    </div>

                    <p className="text-xs text-white/60">
                      Here's to <span className="text-amber-400/90 font-semibold">21 years</span> of being absolutely 
                      <span className="text-orange-400/90 font-semibold"> legendary</span>, and to countless more celebrations ahead!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="flex justify-center gap-3 text-4xl pt-4"
                  >
                    {["🎊", "⚽", "🎂", "🎉", "🎈"].map((emoji, i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="pt-2"
                  >
                    <p className="text-xs text-white/40 font-light">
                      Cheers to an incredible birthday and an even more incredible year ahead! 🥂
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
