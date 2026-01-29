"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Facebook,
  Instagram,
  Phone,
  LucideIcon,
} from "lucide-react";

const LINK_ICONS: Record<string, LucideIcon> = {
  website: Globe,
  facebook: Facebook,
  instagram: Instagram,
  phone: Phone,
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
    bg: "bg-violet-900",
    border: "border-violet-600",
    hoverBg: "hover:bg-violet-800",
    hoverBorder: "hover:border-violet-500",
    iconBg: "bg-violet-600",
    iconHoverBg: "group-hover:bg-violet-500",
    iconColor: "text-white",
    iconHoverColor: "group-hover:text-violet-100",
    titleHoverColor: "group-hover:text-violet-300",
  },
  facebook: {
    bg: "bg-[#0d3a6e]",
    border: "border-[#1877F2]",
    hoverBg: "hover:bg-[#134a85]",
    hoverBorder: "hover:border-[#42A5F5]",
    iconBg: "bg-[#1877F2]",
    iconHoverBg: "group-hover:bg-[#2563eb]",
    iconColor: "text-white",
    iconHoverColor: "group-hover:text-blue-100",
    titleHoverColor: "group-hover:text-[#42A5F5]",
  },
  instagram: {
    bg: "bg-gradient-to-br from-purple-900 to-orange-900",
    border: "border-purple-500",
    hoverBg: "hover:from-purple-800 hover:to-orange-800",
    hoverBorder: "hover:border-pink-500",
    iconBg: "bg-gradient-to-br from-purple-600 to-orange-600",
    iconHoverBg: "group-hover:from-purple-500 group-hover:to-orange-500",
    iconColor: "text-white",
    iconHoverColor: "group-hover:text-pink-100",
    titleHoverColor: "group-hover:text-pink-300",
  },
  phone: {
    bg: "bg-emerald-900",
    border: "border-emerald-600",
    hoverBg: "hover:bg-emerald-800",
    hoverBorder: "hover:border-emerald-500",
    iconBg: "bg-emerald-600",
    iconHoverBg: "group-hover:bg-emerald-500",
    iconColor: "text-white",
    iconHoverColor: "group-hover:text-emerald-100",
    titleHoverColor: "group-hover:text-emerald-300",
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

  const isPhone = item.href.startsWith("tel:");

  return (
    <motion.a
      href={item.href}
      {...(isPhone ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={`group relative block w-full p-4 ${theme.bg} border ${theme.border} rounded-xl ${theme.hoverBg} ${theme.hoverBorder} transition-all duration-300`}
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
          whileHover={{ rotate: isPhone ? 0 : 45 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {isPhone ? (
            <Phone
              className={`w-4 h-4 text-gray-300 group-hover:text-white ${theme.iconHoverColor} transition-colors`}
            />
          ) : (
            <ExternalLink
              className={`w-4 h-4 text-gray-300 group-hover:text-white ${theme.iconHoverColor} transition-colors`}
            />
          )}
        </motion.div>
      </div>
    </motion.a>
  );
}
