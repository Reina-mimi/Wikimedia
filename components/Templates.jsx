// Banner template definitions
export const bannerTemplates = [
    {
      id: "default",
      name: "Default",
      properties: {
        backgroundColor: "#1e3a8a",
        textColor: "#ffffff",
        padding: "py-12",
        alignment: "text-center",
        borderRadius: "rounded-none",
        backgroundPattern: "none",
        boxShadow: "shadow-none",
        borderWidth: "border-0",
        borderColor: "#000000",
        overlayOpacity: "0",
        overlayColor: "#000000",
      },
      description: "Clean, professional blue banner",
    },
    {
      id: "modern",
      name: "Modern",
      properties: {
        backgroundColor: "#111827",
        textColor: "#ffffff",
        padding: "py-16",
        alignment: "text-left",
        borderRadius: "rounded-xl",
        backgroundPattern: "none",
        boxShadow: "shadow-xl",
        borderWidth: "border-0",
        borderColor: "#000000",
        overlayOpacity: "0",
        overlayColor: "#000000",
      },
      description: "Dark, sleek design with rounded corners",
    },
    {
      id: "gradient",
      name: "Gradient",
      properties: {
        backgroundColor: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        textColor: "#ffffff",
        padding: "py-14",
        alignment: "text-center",
        borderRadius: "rounded-lg",
        backgroundPattern: "none",
        boxShadow: "shadow-lg",
        borderWidth: "border-0",
        borderColor: "#000000",
        overlayOpacity: "0",
        overlayColor: "#000000",
      },
      description: "Vibrant gradient background",
    },
    {
      id: "minimal",
      name: "Minimal",
      properties: {
        backgroundColor: "#f9fafb",
        textColor: "#111827",
        padding: "py-10",
        alignment: "text-left",
        borderRadius: "rounded-none",
        backgroundPattern: "none",
        boxShadow: "shadow-sm",
        borderWidth: "border",
        borderColor: "#e5e7eb",
        overlayOpacity: "0",
        overlayColor: "#000000",
      },
      description: "Clean, light design with subtle border",
    },
    {
      id: "pattern",
      name: "Pattern",
      properties: {
        backgroundColor: "#4c1d95",
        textColor: "#ffffff",
        padding: "py-12",
        alignment: "text-center",
        borderRadius: "rounded-none",
        backgroundPattern: "/placeholder.svg?height=100&width=100",
        boxShadow: "shadow-none",
        borderWidth: "border-0",
        borderColor: "#000000",
        overlayOpacity: "0.2",
        overlayColor: "#000000",
      },
      description: "Patterned background with subtle overlay",
    },
    {
      id: "hero",
      name: "Hero",
      properties: {
        backgroundColor: "#000000",
        textColor: "#ffffff",
        padding: "py-20",
        alignment: "text-center",
        borderRadius: "rounded-none",
        backgroundPattern: "none",
        boxShadow: "shadow-none",
        borderWidth: "border-0",
        borderColor: "#000000",
        overlayOpacity: "0.5",
        overlayColor: "#000000",
      },
      description: "Bold hero section with dark overlay",
    },
  ]
  
  // Background pattern options
  export const backgroundPatterns = [
    { value: "none", label: "None" },
    { value: "/placeholder.svg?height=100&width=100", label: "Grid" },
    { value: "/placeholder.svg?height=200&width=200", label: "Dots" },
    { value: "/placeholder.svg?height=300&width=300", label: "Lines" },
    { value: "/placeholder.svg?height=400&width=400", label: "Waves" },
  ]
  
  // Border radius options
  export const borderRadiusOptions = [
    { value: "rounded-none", label: "None" },
    { value: "rounded-sm", label: "Small" },
    { value: "rounded-md", label: "Medium" },
    { value: "rounded-lg", label: "Large" },
    { value: "rounded-xl", label: "Extra Large" },
    { value: "rounded-2xl", label: "2XL" },
    { value: "rounded-3xl", label: "3XL" },
  ]
  
  // Shadow options
  export const shadowOptions = [
    { value: "shadow-none", label: "None" },
    { value: "shadow-sm", label: "Small" },
    { value: "shadow", label: "Normal" },
    { value: "shadow-md", label: "Medium" },
    { value: "shadow-lg", label: "Large" },
    { value: "shadow-xl", label: "Extra Large" },
  ]
  
  // Border width options
  export const borderWidthOptions = [
    { value: "border-0", label: "None" },
    { value: "border", label: "Normal" },
    { value: "border-2", label: "Medium" },
    { value: "border-4", label: "Thick" },
  ]
  
  