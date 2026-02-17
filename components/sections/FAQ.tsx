'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const defaultFaqItems: FAQItem[] = [
  {
    question: 'How can AI automation help my business?',
    answer:
      'AI automation can streamline repetitive tasks, reduce human error, and free up your team to focus on strategic initiatives. From customer service chatbots to intelligent data processing, our solutions help businesses save time, cut costs, and improve overall efficiency.',
  },
  {
    question: 'Is AI automation difficult to integrate?',
    answer:
      'Not at all. Our team handles the entire integration process, ensuring minimal disruption to your existing workflows. We design solutions that work seamlessly with your current systems and provide comprehensive training and support throughout the transition.',
  },
  {
    question: 'What industries can benefit from AI automation?',
    answer:
      'Virtually every industry can benefit from AI automation. We work with clients in healthcare, finance, retail, manufacturing, logistics, and more. Whether you need to automate customer interactions, streamline operations, or analyze complex data, our solutions are adaptable to your specific industry needs.',
  },
  {
    question: 'Do I need technical knowledge to use AI automation?',
    answer:
      'No technical expertise is required. Our solutions are designed with user-friendly interfaces that anyone can operate. We provide thorough training sessions and ongoing support to ensure your team feels confident using the tools we implement.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer comprehensive support including 24/7 technical assistance, regular system updates, performance monitoring, and dedicated account management. Our team is always available to help you maximize the value of your AI automation investment.',
  },
  {
    question: 'How long does it take to implement a solution?',
    answer:
      'Implementation timelines vary depending on project complexity. Simple automations can be deployed within 2–4 weeks, while enterprise-wide solutions typically take 2–3 months. We provide a detailed timeline during the discovery phase so you know exactly what to expect.',
  },
]

function FAQAccordionItem({
  item,
  value,
  index,
}: {
  item: FAQItem
  value: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Accordion.Item value={value} className="group">
        <Accordion.Header>
          <Accordion.Trigger
            className={cn(
              'flex w-full items-center justify-between gap-4',
              'px-6 py-5 rounded-2xl',
              'bg-foreground/[0.06]',
              'text-left text-base md:text-lg font-medium text-foreground',
              'transition-all duration-300',
              'hover:bg-foreground/[0.1]',
              'group-data-[state=open]:rounded-b-none',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50'
            )}
          >
            <span>{item.question}</span>
            <Plus
              className={cn(
                'h-5 w-5 shrink-0 text-foreground/40 transition-transform duration-300',
                'group-data-[state=open]:rotate-45'
              )}
              strokeWidth={1.5}
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          className={cn(
            'overflow-hidden',
            'data-[state=open]:animate-accordion-down',
            'data-[state=closed]:animate-accordion-up'
          )}
        >
          <div className="px-6 py-5 bg-foreground/[0.06] rounded-b-2xl text-muted leading-relaxed text-[15px]">
            {item.answer}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </motion.div>
  )
}

interface FAQProps {
  heading?: string
  subheading?: string
  items?: FAQItem[]
}

export function FAQ({ heading, subheading, items }: FAQProps) {
  const faqItems = items && items.length > 0 ? items : defaultFaqItems
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const blurValue = useTransform(scrollYProgress, [0, 1], [8, 0])
  const filterBlur = useTransform(blurValue, (v) => `blur(${v}px)`)

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <motion.div className="container mx-auto px-4 md:px-6" style={{ filter: filterBlur }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — Header */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground/40" />
              </div>
              <span className="text-sm font-medium text-foreground/60 tracking-wide">
                Frequently Asked Questions
              </span>
            </div>
            <h2
              className={cn(
                'text-3xl md:text-4xl lg:text-[2.75rem] font-bold',
                'text-foreground leading-[1.15] mb-5'
              )}
            >
              {heading || (
                <>
                  We&apos;ve Got the Answers{' '}
                  <span className="bg-gradient-to-r from-[#814AC8] via-[#DF7AFE] to-[#814AC8] bg-clip-text text-transparent">
                    You&apos;re Looking For
                  </span>
                </>
              )}
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-md">
              {subheading ||
                "We've gathered all the important info right here. Explore our FAQs and find the answers you need."}
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <div className="space-y-3">
            <Accordion.Root type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  value={`item-${index}`}
                  index={index}
                />
              ))}
            </Accordion.Root>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
