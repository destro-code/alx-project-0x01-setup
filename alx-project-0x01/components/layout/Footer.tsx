const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-auto border-t">
      <p className="text-sm">
        &copy; {year} Daily Contents. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
