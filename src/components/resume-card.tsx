"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { memo, useCallback, useMemo } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | readonly string[];
}
const MemoizedBadge = memo(Badge);
const MemoizedAvatar = memo(Avatar);
const MemoizedCard = memo(Card);
const MemoizedCardHeader = memo(CardHeader);

export const ResumeCard = memo<ResumeCardProps>(function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  const isVideo = useMemo(() => logoUrl.endsWith('.mp4'), [logoUrl]);
  const isIcon = useMemo(() => !logoUrl.includes('/') && !logoUrl.includes('.'), [logoUrl]);
  const memoizedBadges = useMemo(() => badges, [badges]);
  const memoizedDescription = useMemo(() => description, [description]);
  
  const renderIcon = useMemo(() => {
    if (!isIcon) return null;
    const iconMap: Record<string, React.ReactNode> = {
      university: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
      college: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      school: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="M18 10h4l-6-6-6 6h4v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8z"/></svg>,
      graduationCap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    };
    return iconMap[logoUrl] || iconMap.graduationCap;
  }, [logoUrl, isIcon]);
  
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(prev => !prev);
    }
  }, [description]);
  
  const handleMouseEnter = useCallback(() => {
    if (videoRef.current && isVideo) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVideo]);
  
  const handleMouseLeave = useCallback(() => {
    if (videoRef.current && isVideo) {
      videoRef.current.pause();
    }
  }, [isVideo]);

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
      prefetch={false}
    >
      <MemoizedCard className="flex">
        <div 
          className="flex-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MemoizedAvatar className="border size-10 m-auto bg-muted-background dark:bg-foreground">
            {isIcon ? (
              <div className="flex items-center justify-center w-full h-full text-foreground">
                {renderIcon}
              </div>
            ) : isVideo ? (
              <video
                ref={videoRef}
                src={logoUrl}
                loop
                muted
                playsInline
                preload="none"
                className="object-contain w-full h-full rounded-full"
              />
            ) : (
              <>
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain"
                  loading="lazy"
                />
                <AvatarFallback>{altText[0]}</AvatarFallback>
              </>
            )}
          </MemoizedAvatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <MemoizedCardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {memoizedBadges && (
                  <span className="inline-flex gap-x-1">
                    {memoizedBadges.map((badge, index) => (
                      <MemoizedBadge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </MemoizedBadge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </MemoizedCardHeader>
          {memoizedDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {Array.isArray(memoizedDescription) ? (
                <ul className="list-disc list-inside space-y-1">
                  {memoizedDescription.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                memoizedDescription
              )}
            </motion.div>
          )}
        </div>
      </MemoizedCard>
    </Link>
  );
});
