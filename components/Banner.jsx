import Image from "next/image"
import Link from "next/link"

export default function Banner({
  title,
  description,
  backgroundColor,
  textColor,
  imageUrl,
  padding,
  alignment,
  buttonText,
  buttonUrl,
  borderRadius,
  backgroundPattern,
  boxShadow,
  borderWidth,
  borderColor,
  overlayOpacity,
  overlayColor,
}) {
  // Create a background style object that includes pattern if specified
  const backgroundStyle = {
    backgroundColor,
    borderColor,
    backgroundImage: backgroundPattern !== "none" ? `url(${backgroundPattern})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    position: "relative",
  }

  return (
    <div
      className={`w-full ${padding} ${borderRadius} ${boxShadow} ${borderWidth} relative overflow-hidden`}
      style={backgroundStyle}
    >
      {/* Add overlay div if opacity is greater than 0 */}
      {Number.parseFloat(overlayOpacity) > 0 && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: overlayColor,
            opacity: Number.parseFloat(overlayOpacity),
          }}
        ></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-8 ${alignment}`}>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: textColor }}>
              {title}
            </h1>
            <p className="text-lg mb-6" style={{ color: textColor }}>
              {description}
            </p>
            {buttonText && (
              <Link
                href={buttonUrl || "#"}
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {buttonText}
              </Link>
            )}
          </div>
          <div className="flex-1">
            <div className={`relative w-full h-[300px] ${borderRadius} overflow-hidden`}>
              <Image src={imageUrl || "/placeholder.svg"} alt="Banner image" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

