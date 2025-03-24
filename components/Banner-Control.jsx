"use client"

import { useState } from "react"
import {
  bannerTemplates,
  backgroundPatterns,
  borderRadiusOptions,
  shadowOptions,
  borderWidthOptions,
} from "./Templates"

export default function BannerControls({ bannerProps, onBannerChange }) {
  const [imageInput, setImageInput] = useState("")
  const [activeTab, setActiveTab] = useState("content")
  const [dropdownStates, setDropdownStates] = useState({})

  const handleTextChange = (e) => {
    const { name, value } = e.target
    onBannerChange({ [name]: value })
  }

  const handleSelectChange = (name, value) => {
    onBannerChange({ [name]: value })
    // Close dropdown after selection
    toggleDropdown(name, false)
  }

  const handleImageSubmit = (e) => {
    e.preventDefault()
    if (imageInput.trim()) {
      onBannerChange({ imageUrl: imageInput })
      setImageInput("")
    }
  }

  const applyTemplate = (templateId) => {
    const template = bannerTemplates.find((t) => t.id === templateId)
    if (template) {
      onBannerChange(template.properties)
    }
  }

  const toggleDropdown = (name, forceState = null) => {
    setDropdownStates((prev) => ({
      ...prev,
      [name]: forceState !== null ? forceState : !prev[name],
    }))
  }

  const paddingOptions = [
    { value: "py-4", label: "Small" },
    { value: "py-8", label: "Medium" },
    { value: "py-12", label: "Large" },
    { value: "py-16", label: "Extra Large" },
    { value: "py-20", label: "2XL" },
  ]

  const alignmentOptions = [
    { value: "text-left", label: "Left" },
    { value: "text-center", label: "Center" },
    { value: "text-right", label: "Right" },
  ]

  const predefinedColors = [
    { value: "#1e3a8a", label: "Blue" },
    { value: "#1e40af", label: "Royal Blue" },
    { value: "#047857", label: "Green" },
    { value: "#7c2d12", label: "Brown" },
    { value: "#4c1d95", label: "Purple" },
    { value: "#1f2937", label: "Dark Gray" },
    { value: "#111827", label: "Black" },
    { value: "#f9fafb", label: "Light Gray" },
    { value: "#ffffff", label: "White" },
    { value: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", label: "Purple Gradient" },
    { value: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)", label: "Blue-Green Gradient" },
  ]

  const textColors = [
    { value: "#ffffff", label: "White" },
    { value: "#f3f4f6", label: "Light Gray" },
    { value: "#111827", label: "Black" },
    { value: "#fef3c7", label: "Cream" },
    { value: "#fecaca", label: "Light Pink" },
    { value: "#bfdbfe", label: "Light Blue" },
  ]

  // Custom dropdown component
  const CustomDropdown = ({ name, value, options, onChange, placeholder }) => (
    <div className="relative">
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => toggleDropdown(name)}
      >
        {options.find((opt) => opt.value === value)?.label || placeholder}
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownStates[name] && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => onChange(name, option.value)}
            >
              {option.value.startsWith("#") && (
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    background: option.value.includes("gradient") ? option.value : option.value,
                  }}
                ></div>
              )}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Templates Section */}
      <div className="p-6 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-medium mb-4">Banner Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bannerTemplates.map((template) => (
            <div
              key={template.id}
              className="border rounded-md p-4 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => applyTemplate(template.id)}
            >
              <h4 className="font-medium">{template.name}</h4>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tabs */}
      <div className="w-full">
        {/* Tab Headers */}
        <div className="flex border-b">
          {["content", "style", "advanced"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === tab ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Banner Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={bannerProps.title}
                    onChange={handleTextChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Banner Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={bannerProps.description}
                    onChange={handleTextChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">
                    Button Text
                  </label>
                  <input
                    id="buttonText"
                    name="buttonText"
                    type="text"
                    value={bannerProps.buttonText}
                    onChange={handleTextChange}
                    placeholder="Leave empty to hide button"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="buttonUrl" className="block text-sm font-medium text-gray-700">
                    Button URL
                  </label>
                  <input
                    id="buttonUrl"
                    name="buttonUrl"
                    type="text"
                    value={bannerProps.buttonUrl}
                    onChange={handleTextChange}
                    placeholder="#"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                    Banner Image URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="imageUrl"
                      type="text"
                      value={imageInput}
                      onChange={(e) => setImageInput(e.target.value)}
                      placeholder="Enter image URL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleImageSubmit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Update
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Current image: {bannerProps.imageUrl}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Style Tab */}
        {activeTab === "style" && (
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Background Color</label>
                  <CustomDropdown
                    name="backgroundColor"
                    value={bannerProps.backgroundColor}
                    options={predefinedColors}
                    onChange={handleSelectChange}
                    placeholder="Select background color"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Text Color</label>
                  <CustomDropdown
                    name="textColor"
                    value={bannerProps.textColor}
                    options={textColors}
                    onChange={handleSelectChange}
                    placeholder="Select text color"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Padding</label>
                  <CustomDropdown
                    name="padding"
                    value={bannerProps.padding}
                    options={paddingOptions}
                    onChange={handleSelectChange}
                    placeholder="Select padding"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Text Alignment</label>
                  <CustomDropdown
                    name="alignment"
                    value={bannerProps.alignment}
                    options={alignmentOptions}
                    onChange={handleSelectChange}
                    placeholder="Select alignment"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Border Radius</label>
                  <CustomDropdown
                    name="borderRadius"
                    value={bannerProps.borderRadius}
                    options={borderRadiusOptions}
                    onChange={handleSelectChange}
                    placeholder="Select border radius"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Box Shadow</label>
                  <CustomDropdown
                    name="boxShadow"
                    value={bannerProps.boxShadow}
                    options={shadowOptions}
                    onChange={handleSelectChange}
                    placeholder="Select shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Border Width</label>
                  <CustomDropdown
                    name="borderWidth"
                    value={bannerProps.borderWidth}
                    options={borderWidthOptions}
                    onChange={handleSelectChange}
                    placeholder="Select border width"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Border Color</label>
                  <input
                    type="color"
                    value={bannerProps.borderColor}
                    onChange={(e) => handleSelectChange("borderColor", e.target.value)}
                    className="h-10 w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Tab */}
        {activeTab === "advanced" && (
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Background Pattern</label>
                  <CustomDropdown
                    name="backgroundPattern"
                    value={bannerProps.backgroundPattern}
                    options={backgroundPatterns}
                    onChange={handleSelectChange}
                    placeholder="Select pattern"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Overlay Color</label>
                  <input
                    type="color"
                    value={bannerProps.overlayColor}
                    onChange={(e) => handleSelectChange("overlayColor", e.target.value)}
                    className="h-10 w-full rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Overlay Opacity: {bannerProps.overlayOpacity}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={bannerProps.overlayOpacity}
                    onChange={(e) => handleSelectChange("overlayOpacity", e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 border rounded-lg bg-gray-50">
                  <h4 className="font-medium mb-2">Custom CSS</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Advanced users can add custom CSS properties to the banner.
                  </p>
                  <textarea
                    placeholder="Enter custom CSS (coming soon)"
                    rows={6}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-400"
                  />
                  <p className="text-xs text-gray-500 mt-2">This feature will be available in a future update.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

