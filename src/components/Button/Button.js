
//VARIANT  - PRIMARY | SECONDARY

export default function Button ({ variant, children, ...props }) {
    const bgColor = variant === 'basic' ? 'secondary' : variant === 'secondary' ? 'primary_medium' : variant
    return (
        <button {...props} className={`outline-none rounded-md px-4 py-2 bg-${bgColor} text-white`}>{children}</button>
    )
}