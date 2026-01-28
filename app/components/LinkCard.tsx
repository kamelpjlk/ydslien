"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Facebook,
  Instagram,
  LucideIcon,
} from "lucide-react";

const LINK_ICONS: Record<string, LucideIcon> = {
  website: Globe,
  facebook: Facebook,
  instagram: Instagram,
};

const CARD_THEMES: Record<
  string,
  {
    bg: string;
    border: string;
    hoverBg: string;
    hoverBorder: string;
    iconBg: string;
    iconHoverBg: string;
    iconColor: string;
    iconHoverColor: string;
    titleHoverColor: string;
  }
> = {
  website: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    hoverBg: "hover:bg-teal-500/20",
    hoverBorder: "hover:border-teal-500/40",
    iconBg: "bg-teal-500/20",
    iconHoverBg: "group-hover:bg-teal-500/30",
    iconColor: "text-teal-400",
    iconHoverColor: "group-hover:text-teal-300",
    titleHoverColor: "group-hover:text-teal-300",
  },
  facebook: {
    bg: "bg-[#1877F2]/10",
    border: "border-[#1877F2]/20",
    hoverBg: "hover:bg-[#1877F2]/20",
    hoverBorder: "hover:border-[#1877F2]/40",
    iconBg: "bg-[#1877F2]/20",
    iconHoverBg: "group-hover:bg-[#1877F2]/30",
    iconColor: "text-[#1877F2]",
    iconHoverColor: "group-hover:text-[#42A5F5]",
    titleHoverColor: "group-hover:text-[#42A5F5]",
  },
  instagram: {
    bg: "bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-orange-500/10",
    border: "border-purple-500/20",
    hoverBg:
      "hover:from-purple-600/20 hover:via-pink-600/20 hover:to-orange-500/20",
    hoverBorder: "hover:border-pink-500/40",
    iconBg:
      "bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-500/20",
    iconHoverBg:
      "group-hover:from-purple-600/30 group-hover:via-pink-600/30 group-hover:to-orange-500/30",
    iconColor: "text-pink-400",
    iconHoverColor: "group-hover:text-pink-300",
    titleHoverColor: "group-hover:text-pink-300",
  },
};

interface LinkCardProps {
  item: {
    id: string;
    title: string;
    href: string;
    description: string;
  };
  index?: number;
}

export function LinkCard({ item, index = 0 }: LinkCardProps) {
  const Icon = LINK_ICONS[item.id] ?? Globe;
  const theme = CARD_THEMES[item.id] ?? CARD_THEMES.website;

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full p-4 ${theme.bg} backdrop-blur-sm border ${theme.border} rounded-xl ${theme.hoverBg} ${theme.hoverBorder} transition-all duration-300`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.1,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center ${theme.iconHoverBg} transition-colors`}
          >
            <Icon
              className={`w-5 h-5 ${theme.iconColor} ${theme.iconHoverColor} transition-colors`}
            />
          </div>
          <div className="min-w-0">
            <h3
              className={`text-base font-semibold text-white mb-0.5 ${theme.titleHoverColor} transition-colors`}
            >
              {item.title}
            </h3>
            <p className="text-xs text-gray-400">{item.description}</p>
          </div>
        </div>
        <motion.div
          className="flex-shrink-0"
          whileHover={{ rotate: 45 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ExternalLink
            className={`w-4 h-4 text-gray-400 ${theme.iconHoverColor} transition-colors`}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}
