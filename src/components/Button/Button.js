
//VARIANT  - PRIMARY | SECONDARY | BASIC
"use client"

export default function Button ({ variant, children, ...props }) {
    const bgColor = variant === 'basic' ? 'secondary' : variant === 'secondary' ? 'primary_medium' : variant
    return (
        <button {...props} className={`outline-none animate-fade-in rounded-md px-4 py-2 ${variant === 'basic' ? 'bg-secondary' : variant === 'secondary' ? 'bg-primary_medium' : 'bg-primary'} text-white`}>{children}</button>
    )
}