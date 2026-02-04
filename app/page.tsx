"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import React, { useMemo } from 'react'


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
  "Bas almost ho gaya",
  "💪💪💪💪💪💪",
  "SO CLOSE!",
  "Acha bas aik aur",
  "Nakhray na karo. Hit it again 😾",
  "Acha aik aur....",
  "C'mom aik aurrrrrr",
  "PROMISE YE LAST HAI 🥹",
  "Ho gayaaaaaaa!"
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



function CelebrationCard() {
  const [cardStep, setCardStep] = useState(0)
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [showFinale, setShowFinale] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isCardOpen && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Audio autoplay blocked:", e))
    }
  }, [isCardOpen])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }
  const cardSteps = [
    {
      title: "Happy 21st Birthday Humayun 🥳",
      message: "May you have many many more with health and emaan, Humz.",
      bg: "from-slate-950 to-neutral-900",
      accentFrom: "from-blue-400",
      accentTo: "to-cyan-400"
    },
    {
      title: "Best Footballer",
      message: "I don't know much about football (😭), but I know you're the GOAT. Keep scoring those goals in life ⚽.",
      bg: "from-neutral-900 to-stone-950",
      accentFrom: "from-violet-400",
      accentTo: "to-purple-400"
    },
    {
      title: "AMAZING FRIEND!!!",
      message: "Shaadi days were supposed to go boring for me, but damn bhai, those days were the most memorable days of my life. You're such a lively and fun person to be around!",
      bg: "from-stone-950 to-zinc-900",
      accentFrom: "from-amber-400",
      accentTo: "to-orange-400"
    },
    {
      title: "Pls meet soon",
      message: "Mayun bhai treat kaisay lon? Mai Karachi aaon ya aap Lahore aa rahay? HAPPY HAPPY BIRTHDAYYY! 🎂🎊🎈  Enjoy the day, and issi zindagi mein aik baar dobara mil lena 😭😭😭",
      bg: "from-zinc-900 to-neutral-950",
      accentFrom: "from-emerald-400",
      accentTo: "to-teal-400"
    }
  ]
  
  const currentStep = cardSteps[cardStep]

  // RENDER LOGIC
  let content

  if (showFinale) {
  content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center space-y-6 px-6"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-light text-white tracking-tight"
          animate={{ 
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          HUMAYUN BHAI
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-3xl md:text-5xl font-extralight text-white/60 tracking-widest"
        >
          THE GOAT
        </motion.p>
      </motion.div>

      {/* Restart Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [1, 0.7, 1]
        }}
        transition={{ 
          delay: 1,
          opacity: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={() => window.location.reload()}
        className="fixed bottom-16 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/50 text-xs font-light tracking-widest transition-colors"
      >
        RESTART
      </motion.button>

      {/* Music Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={toggleMusic}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/50 text-xs font-light tracking-widest transition-colors"
      >
        {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
      </motion.button>
    </motion.div>
  )
}
 else if (!isCardOpen) {
    content = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full min-h-screen flex items-center justify-center p-6 bg-black"
      >
        <motion.button
          onClick={() => setIsCardOpen(true)}
          className="relative group"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-60"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                filter: "blur(20px)"
              }}
            />
            
            <div className="relative w-full h-full bg-black m-[2px] rounded-3xl flex flex-col items-center justify-center space-y-8 p-8">
              <motion.div
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-xl" />
              </motion.div>

              <div className="text-center space-y-4">
                <h2 className="text-4xl font-light text-white tracking-tight">
                  For Humayun
                </h2>
                <p className="text-white/40 text-sm font-light tracking-wider">
                  Tap to open
                </p>
              </div>

              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-8 w-12 h-[1px] bg-white/30"
              />
            </div>
          </div>
        </motion.button>
      </motion.div>
    )
  } else {
    content = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`relative z-10 w-full min-h-screen flex items-center justify-center p-6 bg-gradient-to-br ${currentStep.bg} transition-all duration-1000`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-px h-px bg-gradient-to-r ${currentStep.accentFrom} ${currentStep.accentTo} rounded-full`}
              initial={{ 
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scale: [0, 2, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <motion.div
          key={cardStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md space-y-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className={`inline-block text-sm font-light bg-gradient-to-r ${currentStep.accentFrom} ${currentStep.accentTo} bg-clip-text text-transparent tracking-widest`}>
              {String(cardStep + 1).padStart(2, '0')} / {String(cardSteps.length).padStart(2, '0')}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-light text-white text-center tracking-tight leading-tight"
          >
            {currentStep.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/50 text-lg md:text-xl font-light text-center leading-relaxed tracking-wide px-4"
          >
            {currentStep.message}
          </motion.p>

          {cardStep === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="flex justify-center"
            >
              <div className={`bg-gradient-to-r ${currentStep.accentFrom} ${currentStep.accentTo} bg-clip-text text-transparent text-6xl font-extralight tracking-wider`}>
                21
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-full h-[1px] bg-white/10 relative overflow-hidden"
          >
            <motion.div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentStep.accentFrom} ${currentStep.accentTo}`}
              initial={{ width: "0%" }}
              animate={{ width: `${((cardStep + 1) / cardSteps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-between gap-4"
          >
            <button
              onClick={() => setCardStep(Math.max(0, cardStep - 1))}
              disabled={cardStep === 0}
              className={`px-6 py-3 rounded-full text-sm font-light tracking-wider transition-all ${
                cardStep === 0
                  ? "text-white/20 cursor-not-allowed"
                  : "text-white/60 hover:text-white active:scale-95"
              }`}
            >
              Back
            </button>

            <button
              onClick={() => {
                if (cardStep < cardSteps.length - 1) {
                  setCardStep(cardStep + 1)
                } else {
                  setShowFinale(true)
                }
              }}
              className={`px-8 py-3 rounded-full text-sm font-light tracking-wider transition-all bg-gradient-to-r ${currentStep.accentFrom} ${currentStep.accentTo} text-white hover:opacity-90 active:scale-95`}
            >
              {cardStep === cardSteps.length - 1 ? "Finish" : "Continue"}
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            onClick={toggleMusic}
            className="w-full text-center text-white/30 hover:text-white/50 text-xs font-light tracking-widest transition-colors"
          >
            {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
          </motion.button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <>
      {content}
      {/* GLOBAL AUDIO - PERSISTS ACROSS ALL STATES */}
      <audio ref={audioRef} src="/birthday.mp3" loop />
    </>
  )
}



export default function BirthdayWish() {
  const [isLocked, setIsLocked] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
   const cheerAudioRef = useRef<HTMLAudioElement | null>(null)
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
  const callingAudioRef = useRef<HTMLAudioElement | null>(null)
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
      if (cheerAudioRef.current) {
          cheerAudioRef.current.play().catch(e => console.log("Cheer audio blocked:", e))
        }
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
// Fixed position: bottom center (no random - not needed anymore)
setMessagePosition({ x: 50, y: 85 })

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
      if (callingAudioRef.current) {
    callingAudioRef.current.play().catch(e => console.log("Calling audio blocked:", e))
  }
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
for (let i = 0; i < 500; i++) {
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
// COUNTDOWN TIMER
useEffect(() => {
  const targetDate = new Date('2026-02-06T00:00:00').getTime()
  
  const updateCountdown = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      setIsLocked(false)
      return
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    })
  }

  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)

  return () => clearInterval(interval)
}, [])




// COUNTDOWN SCREEN
if (isLocked) {
  // Color swap state - toggles every 4 seconds
  const [isInverted, setIsInverted] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsInverted(prev => !prev)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Generate confetti config ONCE outside render
  const confettiConfig = useMemo(() => {
    const colors = [
      'rgba(251, 146, 60, 0.7)',
      'rgba(139, 92, 246, 0.7)',
      'rgba(59, 130, 246, 0.7)',
      'rgba(236, 72, 153, 0.7)',
      'rgba(34, 197, 94, 0.7)',
      'rgba(234, 179, 8, 0.7)'
    ]
    
    const shapes = ['rotate-45', 'rotate-0', '-rotate-45', 'rounded-full']
    
    return [...Array(60)].map((_, i) => {
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
      const duration = Math.random() * 2 + 4
      const delay = (i * 0.08) % duration
      
      return {
        id: i,
        shape: randomShape,
        width: Math.random() * 10 + 5,
        height: randomShape === 'rounded-full' ? Math.random() * 10 + 5 : Math.random() * 14 + 6,
        color: colors[i % colors.length],
        left: `${(Math.random() * 100)}%`,
        startY: -20 - Math.random() * 20,
        endY: 120,
        xMove: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 720 - 360,
        duration,
        delay
      }
    })
  }, [])

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center overflow-hidden relative"
      animate={{
        background: isInverted 
          ? '#000000'
          : 'linear-gradient(to bottom, #f9fafb, #ffffff)'
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Continuous Confetti Shower */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiConfig.map((conf) => (
          <motion.div
            key={conf.id}
            className={`absolute ${conf.shape}`}
            style={{
              width: conf.width,
              height: conf.height,
              backgroundColor: conf.color,
              left: conf.left,
              top: `${conf.startY}%`
            }}
            animate={{
              y: [`${conf.startY}vh`, `${conf.endY}vh`],
              x: [0, conf.xMove],
              rotate: [0, conf.rotation],
              opacity: [0, 1, 1, 1, 0.7, 0]
            }}
            transition={{
              duration: conf.duration,
              repeat: Infinity,
              delay: conf.delay,
              ease: "linear",
              repeatDelay: 0
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center space-y-12 px-6 max-w-md"
      >
        {/* Profile Image Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mx-auto relative"
        >
          <div className="w-32 h-32 rounded-full bg-gray-100 mx-auto flex items-center justify-center relative overflow-hidden">
            <img 
              src="/hums.jpeg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]">
              <motion.circle
                cx="50%"
                cy="50%"
                r="63"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="400"
                animate={{
                  strokeDashoffset: [0, -400],
                  rotate: 360
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{ transformOrigin: "center" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="25%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="75%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <motion.h1 
            className="text-3xl font-semibold tracking-tight"
            animate={{ color: isInverted ? '#f9fafb' : '#111827' }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Wait for 6th Feb
          </motion.h1>
          <motion.p 
            className="text-base font-normal"
            animate={{ color: isInverted ? '#9ca3af' : '#6b7280' }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            you dumb potato 😾🥔
          </motion.p>
        </motion.div>

        {/* Clean Minimal Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-6"
        >
          {/* Countdown Display */}
          <motion.div 
            className="rounded-3xl px-10 py-5 shadow-2xl backdrop-blur-sm"
            animate={{ 
              backgroundColor: isInverted ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)'
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center gap-3">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  {String(timeLeft.days).padStart(2, '0').split('').map((digit, i) => (
                    <motion.div
                      key={`day-${i}-${digit}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        color: isInverted ? '#000000' : '#ffffff'
                      }}
                      transition={{ duration: 0.3, color: { duration: 1, ease: "easeInOut" } }}
                      className="text-5xl font-black tracking-tight"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {digit}
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-xs uppercase tracking-widest mt-2 font-medium"
                  animate={{ color: isInverted ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Days
                </motion.div>
              </div>

              {/* Colon */}
              <motion.div 
                className="text-4xl font-bold px-1 pb-6"
                animate={{ color: isInverted ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                :
              </motion.div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  {String(timeLeft.hours).padStart(2, '0').split('').map((digit, i) => (
                    <motion.div
                      key={`hour-${i}-${digit}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        color: isInverted ? '#000000' : '#ffffff'
                      }}
                      transition={{ duration: 0.3, color: { duration: 1, ease: "easeInOut" } }}
                      className="text-5xl font-black tracking-tight"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {digit}
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-xs uppercase tracking-widest mt-2 font-medium"
                  animate={{ color: isInverted ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Hours
                </motion.div>
              </div>

              {/* Colon */}
              <motion.div 
                className="text-4xl font-bold px-1 pb-6"
                animate={{ color: isInverted ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                :
              </motion.div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5">
                  {String(timeLeft.minutes).padStart(2, '0').split('').map((digit, i) => (
                    <motion.div
                      key={`min-${i}-${digit}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        color: isInverted ? '#000000' : '#ffffff'
                      }}
                      transition={{ duration: 0.3, color: { duration: 1, ease: "easeInOut" } }}
                      className="text-5xl font-black tracking-tight"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {digit}
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-xs uppercase tracking-widest mt-2 font-medium"
                  animate={{ color: isInverted ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Minutes
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar with Football */}
          <div className="relative w-full max-w-sm mx-auto pt-2">
            <motion.div 
              className="h-2 rounded-full overflow-hidden"
              animate={{ backgroundColor: isInverted ? '#1f2937' : '#e5e7eb' }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div
                className="h-full"
                animate={{ backgroundColor: isInverted ? '#ffffff' : '#000000' }}
                style={{ 
                  width: `${((60 - timeLeft.seconds) / 60) * 100}%`
                }}
                transition={{ width: { duration: 0.3 }, backgroundColor: { duration: 1, ease: "easeInOut" } }}
              />
            </motion.div>
            {/* Football emoji on progress bar */}
            <motion.div
              className="absolute -top-1 text-2xl"
              style={{
                left: `calc(${((60 - timeLeft.seconds) / 60) * 100}% - 12px)`
              }}
              transition={{ duration: 0.3 }}
            >
              ⚽
            </motion.div>
          </div>

          {/* Seconds Display */}
          <motion.div
            key={timeLeft.seconds}
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: 1,
              color: isInverted ? '#6b7280' : '#9ca3af'
            }}
            transition={{ duration: 0.2, color: { duration: 1, ease: "easeInOut" } }}
            className="text-lg font-medium"
          >
            {String(timeLeft.seconds).padStart(2, '0')} seconds
          </motion.div>
        </motion.div>

        {/* Status text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            color: isInverted ? '#9ca3af' : '#9ca3af'
          }}
          transition={{ delay: 1.2, color: { duration: 1, ease: "easeInOut" } }}
          className="text-sm"
        >
          Something special is coming...
        </motion.div>
      </motion.div>
    </motion.div>
  )
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
                  Click the football {21 - hits} more {21 - hits === 1 ? 'time' : 'times'}!
                </p>
              </motion.div>

              <div className="max-w-xs mx-auto">
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(hits / 21) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="mt-2 text-xs font-bold text-amber-400/80">
                  {hits} / 21 HITS! {Math.round((hits / 21) * 100)}%
                </p>
              </div>
            </div>
            )}

            {/* PENDULUM SYSTEM */}
<div className="flex-1 relative">
  {/* Pivot point at top center - IMAGE */}
  {!hidePivot && (
  <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: "5vh" }}>
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
      top: "5vh",
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
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.4 }}
  className="fixed bottom-8 left-0 right-0 z-30 pointer-events-none flex justify-center px-4"
>
  <div className={`backdrop-blur-sm bg-gradient-to-br ${messageColors[messageColor]} rounded-xl p-4 shadow-2xl max-w-sm border`}>
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
  className="fixed pointer-events-none z-50"
  style={{
    left: `${item.x}%`,
  }}
  initial={{ 
    y: `${item.y}vh`, 
    opacity: 1, 
    scale: item.scale,
    rotate: 0 
  }}
  animate={{
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
          <CelebrationCard />
        )}
      </AnimatePresence>
      <audio ref={cheerAudioRef} src="/cheer.mp3" />
      <audio ref={callingAudioRef} src="/calling.mp3" /> 
    </div>
  )
}
