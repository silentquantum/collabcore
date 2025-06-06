import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Globe, TrendingUp, Shield, ArrowRight, Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CollabCoreLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
            <Users className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-blue-900">CollabCore</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-blue-900">
                  Find Your Perfect
                  <span className="block text-blue-600">Learning Partner</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-700 md:text-xl lg:text-2xl">
                  Connect with like-minded learners across programming, trading, design, languages, and more.
                  Collaborate on projects, share knowledge, and accelerate your growth together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-8 text-sm text-blue-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5 rating</span>
                </div>
                <div className="h-4 w-px bg-blue-300" />
                <span>10,000+ active learners</span>
                <div className="h-4 w-px bg-blue-300" />
                <span>50+ skill categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Why Choose CollabCore?
              </h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl">
                Discover the features that make learning collaboration seamless and effective
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Smart Matching</CardTitle>
                  <CardDescription className="text-blue-700">
                    Our AI-powered algorithm connects you with partners who complement your skills and learning goals.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Goal Alignment</CardTitle>
                  <CardDescription className="text-blue-700">
                    Find partners with similar objectives and timelines to ensure productive collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Project Collaboration</CardTitle>
                  <CardDescription className="text-blue-700">
                    Work together on real projects that enhance your portfolio and practical skills.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Global Community</CardTitle>
                  <CardDescription className="text-blue-700">
                    Connect with learners from around the world and gain diverse perspectives.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Progress Tracking</CardTitle>
                  <CardDescription className="text-blue-700">
                    Monitor your learning journey and celebrate milestones with your partners.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Safe Environment</CardTitle>
                  <CardDescription className="text-blue-700">
                    Verified profiles and community guidelines ensure a secure learning space.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                How It Works
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Start Learning Together in 3 Simple Steps
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-900">Create Your Profile</h3>
                <p className="text-blue-700">
                  Tell us about your skills, interests, and learning goals. Add your experience level and preferred
                  collaboration style.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Create Profile"
                  className="rounded-lg border border-blue-200"
                />
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-900">Get Matched</h3>
                <p className="text-blue-700">
                  Our smart algorithm finds compatible learning partners based on your profile, goals, and availability.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Get Matched"
                  className="rounded-lg border border-blue-200"
                />
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-900">Start Collaborating</h3>
                <p className="text-blue-700">
                  Connect with your matches, plan your learning journey, and work on projects together to achieve your
                  goals.
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Start Collaborating"
                  className="rounded-lg border border-blue-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                What Our Learners Say
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      width={50}
                      height={50}
                      alt="Sarah Chen"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-blue-900">Sarah Chen</CardTitle>
                      <CardDescription className="text-blue-700">Full-Stack Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <p className="text-blue-700">
                    "CollabCore helped me find an amazing study partner for learning React. We built three projects
                    together and both landed our dream jobs!"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      width={50}
                      height={50}
                      alt="Marcus Rodriguez"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-blue-900">Marcus Rodriguez</CardTitle>
                      <CardDescription className="text-blue-700">Day Trader</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <p className="text-blue-700">
                    "The trading community here is incredible. I found mentors and peers who helped me develop winning
                    strategies and risk management skills."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      width={50}
                      height={50}
                      alt="Emma Thompson"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-blue-900">Emma Thompson</CardTitle>
                      <CardDescription className="text-blue-700">UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <p className="text-blue-700">
                    "Learning Spanish became so much more enjoyable with my language exchange partner. We practice daily
                    and have become great friends!"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Find Your Learning Partner?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Join thousands of learners who are accelerating their growth through collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 bg-white"
      >
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-blue-900">CollabCore</span>
              </div>
              <p className="text-blue-700 text-sm">
                Connecting learners worldwide to accelerate growth through collaboration.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-blue-900">Product</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Features
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  API
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Integrations
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-blue-900">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  About
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-blue-900">Support</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Help Center
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Community
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-blue-700 hover:text-blue-900">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-blue-200">
            <p className="text-xs text-blue-600">© {new Date().getFullYear()} CollabCore. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-blue-600 hover:text-blue-900">
                Privacy
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:text-blue-900">
                Terms
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:text-blue-900">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
