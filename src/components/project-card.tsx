import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useRef, memo, useMemo, useCallback } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

const MemoizedBadge = memo(Badge);
const MemoizedCardTitle = memo(CardTitle);
const MemoizedMarkdown = memo(Markdown);

export const ProjectCard = memo<Props>(function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const processedLink = useMemo(() => 
    link?.replace("https://", "").replace("www.", "").replace("/", ""),
    [link]
  );
  
  const memoizedTags = useMemo(() => tags, [tags]);
  const memoizedLinks = useMemo(() => links, [links]);
  
  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
        prefetch={false}
      >
        {video && (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onLoadedData={handleVideoLoad}
            className="pointer-events-none mx-auto h-40 w-full object-contain bg-muted"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <MemoizedCardTitle className="mt-1 text-base">{title}</MemoizedCardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {processedLink}
          </div>
          <MemoizedMarkdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </MemoizedMarkdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {memoizedTags && memoizedTags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {memoizedTags.map((tag) => (
              <MemoizedBadge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </MemoizedBadge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {memoizedLinks && memoizedLinks.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {memoizedLinks.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank" prefetch={false}>
                <MemoizedBadge className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </MemoizedBadge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
});
