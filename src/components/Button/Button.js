
//VARIANT  - PRIMARY | SECONDARY

export default function Button ({ variant, children, ...props }) {
    const bgColor = variant === 'basic' ? 'secondary' : variant === 'secondary' ? 'primary_medium' : variant
    return (
        <button {...props} className={`outline-none px-4 py-3 bg-${bgColor} text-white`}>{children}</button>
    )
}