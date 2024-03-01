export function OutlinedButton({ text, children }) {
  return (
    <button className='border-white border-2 rounded-full px-6 py-3'>
      {text}
      {children}
    </button>
  )
}

export function FilledButton({ text, children }) {
  return (
    <button className='bg-white rounded-full px-6 py-3 text-[#0e0e0e]'>
      {text}
      {children}
    </button>
  )
}
