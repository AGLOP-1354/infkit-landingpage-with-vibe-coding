"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Zap,
  Clock,
  TrendingUp,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
  CheckCircle,
  Users,
  Star,
  Sparkles,
  Send,
  FileText,
  Hash,
} from "lucide-react"

// Framer Motion 애니메이션 variants
const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function InfkitAILanding() {
  const [email, setEmail] = useState("")
  const [platform, setPlatform] = useState("")
  const [followers, setFollowers] = useState("")
  const [contentType, setContentType] = useState("")
  const [limitedUsers, setLimitedUsers] = useState(100)
  
  // 데모 상태
  const [demoUrl, setDemoUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState({
    blog: "",
    instagram: "",
    twitter: ""
  })

  // 카운트다운 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setLimitedUsers((prev) => {
        const newCount = prev - Math.floor(Math.random() * 2)
        return newCount > 50 ? newCount : 50
      })
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, platform, followers, contentType })
  }

  // 데모 생성 함수
  const handleDemoGenerate = async () => {
    if (!demoUrl) return
    
    setIsGenerating(true)
    
    // 실제 API 호출 대신 시뮬레이션
    setTimeout(() => {
      setGeneratedContent({
        blog: "유튜브 영상을 다양한 플랫폼에 맞게 변환하는 방법에 대해 알아보겠습니다. 이 영상에서는 콘텐츠 창작자들이 어떻게 하나의 영상으로 여러 플랫폼에서 활용할 수 있는지 상세히 설명합니다...",
        instagram: "유튜브 영상을 다양한 플랫폼에 맞게 변환하는 방법! 🎬✨ #콘텐츠창작 #마케팅 #인플루언서",
        twitter: "유튜브 영상 하나로 블로그, 인스타, 트위터까지! AI가 자동으로 변환해주는 시대가 왔습니다 🚀"
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center border-b border-white/20 backdrop-blur-md bg-black/30">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">InfkitAI</span>
          </div>
        </div>
        <nav className="ml-auto flex gap-2 sm:gap-4 lg:gap-6">
          <a href="#features" className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors px-2 py-1">
            기능
          </a>
          <a href="#pricing" className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors px-2 py-1">
            요금제
          </a>
          <a href="#contact" className="text-xs sm:text-sm font-medium text-white hover:text-purple-300 transition-colors px-2 py-1">
            문의
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-3 sm:px-4 lg:px-6 py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Limited Offer Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/30 to-orange-500/30 border border-red-400/50 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-white">🔥 한정 특가! {limitedUsers}명 남음</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent block sm:inline">
              클릭 한번으로
            </span>
            <br className="hidden sm:block" />
            <span className="text-white block sm:inline">여러분의 콘텐츠를</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent block sm:inline">
              만들어 내세요
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            유튜브 영상 하나로 블로그, SNS, 커뮤니티까지!
            <br className="hidden sm:block" />
            <span className="text-purple-200 font-semibold">InfkitAI</span>가 모든 플랫폼에 맞는 콘텐츠를 자동 생성합니다.
          </p>

          {/* Demo Section */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="bg-black/60 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">🎬 실제 서비스 체험해보기</h3>
              
              {/* URL Input */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                    <span className="text-white font-medium text-sm sm:text-base">유튜브 URL 입력</span>
                  </div>
                  <Input
                    type="url"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=example"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <Button
                  onClick={handleDemoGenerate}
                  disabled={!demoUrl || isGenerating}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-0 h-10 sm:h-12 w-full sm:w-auto"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                      생성 중...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                      변환하기
                    </>
                  )}
                </Button>
              </div>

              {/* Generated Content */}
              {(generatedContent.blog || generatedContent.instagram || generatedContent.twitter) && (
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">생성된 콘텐츠</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {/* Blog Post */}
                    <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                        <span className="text-white font-medium text-xs sm:text-sm">블로그 포스트</span>
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {generatedContent.blog}
                      </p>
                    </div>

                    {/* Instagram Caption */}
                    <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                        <span className="text-white font-medium text-xs sm:text-sm">인스타그램 캡션</span>
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {generatedContent.instagram}
                      </p>
                    </div>

                    {/* Twitter Post */}
                    <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                        <Hash className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                        <span className="text-white font-medium text-xs sm:text-sm">트위터 게시물</span>
                      </div>
                      <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {generatedContent.twitter}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero CTA */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-0 w-full sm:w-auto"
            >
              30% 할인으로 시작하기
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl font-semibold backdrop-blur-sm bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              데모 보기
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 opacity-80">
            <Youtube className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-400" />
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-pink-400" />
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-black/40 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              왜{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                InfkitAI
              </span>
              <span className="text-white">인가요?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
              콘텐츠 창작자들의 실제 고민을 해결하는 혁신적인 AI 솔루션
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardVariants}>
              <Card className="bg-black/60 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">시간 절약</h3>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base flex-1">
                    하나의 유튜브 영상으로 블로그 포스트, SNS 게시물, 커뮤니티 글까지 한 번에 생성하세요.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-black/60 border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">트렌드 분석</h3>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base flex-1">
                    AI가 최신 트렌드를 분석하여 각 플랫폼에 최적화된 콘텐츠를 제안합니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-black/60 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm h-full md:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">효율성 극대화</h3>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base flex-1">
                    플랫폼별 특성에 맞는 톤앤매너와 형식으로 자동 변환하여 효율성을 극대화합니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              간단한{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">3단계</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 px-2">복잡한 설정 없이 바로 시작하세요</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                step: "1",
                title: "유튜브 URL 입력",
                description: "변환하고 싶은 유튜브 영상의 링크를 붙여넣기만 하세요.",
              },
              {
                step: "2",
                title: "플랫폼 선택",
                description: "블로그, 인스타그램, 트위터 등 원하는 플랫폼을 선택하세요.",
              },
              {
                step: "3",
                title: "콘텐츠 완성",
                description: "AI가 각 플랫폼에 최적화된 콘텐츠를 자동으로 생성합니다.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="text-center px-2" variants={cardVariants}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-20 px-4 bg-black/40 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              창작자들의{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">후기</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                name: "김유튜버",
                role: "유튜브 크리에이터 (구독자 50만)",
                content: "영상 하나로 블로그 포스트까지 자동 생성되니까 정말 시간이 많이 절약돼요!",
                rating: 5,
              },
              {
                name: "박인플루언서",
                role: "인스타그램 인플루언서 (팔로워 30만)",
                content: "각 플랫폼에 맞는 톤으로 변환해주는 게 정말 신기해요. 퀄리티도 높고!",
                rating: 5,
              },
              {
                name: "이창작자",
                role: "멀티 플랫폼 창작자",
                content: "이제 콘텐츠 재활용이 이렇게 쉬워졌다니... 진짜 혁신적이에요.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-black/60 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing" 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-6 py-3 text-lg mb-6 border-0">
              🎉 런칭 기념 특가
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              지금 시작하면{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                30% 할인
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">100명 한정! 놓치면 후회하는 기회</p>

            <div className="bg-black/60 border border-purple-500/40 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-gray-400 text-lg line-through mb-2">월 ₩29,000</div>
                <div className="text-4xl font-bold text-white mb-4">
                  월{" "}
                  <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    ₩19,900
                  </span>
                </div>
                <div className="text-purple-200 font-semibold mb-6">첫 달 30% 할인 적용</div>

                <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                  {[
                    "무제한 영상 변환",
                    "모든 주요 플랫폼 지원",
                    "AI 트렌드 분석",
                    "24/7 고객 지원",
                    "프리미엄 템플릿",
                    "우선 업데이트 제공",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-red-500/30 border border-red-400/50 rounded-xl p-4 mb-8 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-red-200">
                <Users className="w-5 h-5" />
                <span className="font-semibold">한정 {limitedUsers}명 남음!</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sign Up Form */}
      <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">지금 바로 시작하세요!</h2>
            <p className="text-gray-200 text-lg">30초면 가입 완료! 바로 콘텐츠 생성을 시작할 수 있어요.</p>
          </div>

          <Card className="bg-black/60 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">이메일 주소</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">주로 활동하는 플랫폼</label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/30 rounded-md text-white focus:border-purple-400 focus:outline-none"
                    required
                  >
                    <option value="" className="text-gray-800">
                      선택해주세요
                    </option>
                    <option value="youtube" className="text-gray-800">
                      유튜브
                    </option>
                    <option value="instagram" className="text-gray-800">
                      인스타그램
                    </option>
                    <option value="blog" className="text-gray-800">
                      블로그
                    </option>
                    <option value="tiktok" className="text-gray-800">
                      틱톡
                    </option>
                    <option value="twitter" className="text-gray-800">
                      트위터
                    </option>
                    <option value="multiple" className="text-gray-800">
                      여러 플랫폼
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">팔로워/구독자 수</label>
                  <select
                    value={followers}
                    onChange={(e) => setFollowers(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/30 rounded-md text-white focus:border-purple-400 focus:outline-none"
                    required
                  >
                    <option value="" className="text-gray-800">
                      선택해주세요
                    </option>
                    <option value="under-1k" className="text-gray-800">
                      1천명 미만
                    </option>
                    <option value="1k-10k" className="text-gray-800">
                      1천~1만명
                    </option>
                    <option value="10k-100k" className="text-gray-800">
                      1만~10만명
                    </option>
                    <option value="100k-1m" className="text-gray-800">
                      10만~100만명
                    </option>
                    <option value="over-1m" className="text-gray-800">
                      100만명 이상
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">주요 콘텐츠 유형</label>
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/30 rounded-md text-white focus:border-purple-400 focus:outline-none"
                    required
                  >
                    <option value="" className="text-gray-800">
                      선택해주세요
                    </option>
                    <option value="education" className="text-gray-800">
                      교육/강의
                    </option>
                    <option value="entertainment" className="text-gray-800">
                      엔터테인먼트
                    </option>
                    <option value="lifestyle" className="text-gray-800">
                      라이프스타일
                    </option>
                    <option value="business" className="text-gray-800">
                      비즈니스
                    </option>
                    <option value="tech" className="text-gray-800">
                      기술/IT
                    </option>
                    <option value="other" className="text-gray-800">
                      기타
                    </option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-0"
                >
                  30% 할인으로 지금 시작하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-gray-300 text-sm">
                  가입 즉시 무료 체험이 시작됩니다. 언제든 취소 가능해요.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-white/20 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">InfkitAI</span>
              </div>
              <p className="text-gray-300">콘텐츠 창작자를 위한 AI 솔루션</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-300">
                <li>영상 변환</li>
                <li>트렌드 분석</li>
                <li>플랫폼 최적화</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-gray-300">
                <li>고객센터</li>
                <li>사용 가이드</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-300">
                <li>support@infkitai.com</li>
                <li>1588-0000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 InfkitAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
