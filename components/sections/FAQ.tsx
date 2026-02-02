'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
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
]

function FAQAccordionItem({
  item,
  value,
}: {
  item: FAQItem
  value: string
}) {
  return (
    <Accordion.Item
      value={value}
      className={cn(
        'border-b border-white/10',
        'group'
      )}
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            'flex w-full items-center justify-between py-6',
            'text-left text-lg md:text-xl font-medium text-foreground',
            'transition-colors duration-200',
            'hover:text-primary',
            'group-data-[state=open]:text-primary',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          )}
        >
          {item.question}
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-muted transition-transform duration-300',
              'group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary'
            )}
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={cn(
          'overflow-hidden',
          'data-[state=open]:animate-accordion-down',
          'data-[state=closed]:animate-accordion-up',
          'transition-all duration-300'
        )}
      >
        <div className="p-4 pt-0 pb-6 text-muted leading-relaxed">
          {item.answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
}

export function FAQ() {
  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold',
              'text-foreground leading-tight mb-6'
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We've Got the Answers You're{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Looking For
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Quick answers to your AI automation questions.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Accordion.Root
            type="single"
            collapsible
            className="w-full"
          >
            {faqItems.map((item, index) => (
              <FAQAccordionItem
                key={index}
                item={item}
                value={`item-${index}`}
              />
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  )
}
