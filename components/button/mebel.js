import Button from '@/components/button'

const Icon = () =>
  // prettier-ignore
  <svg width="31" height="24" viewBox="0 0 31 24" fill="none">
    <path d="M25.1204 8.20022V5.7651C25.1204 2.58725 22.5456 0 19.3807 0H10.9359C7.77098 0 5.19624 2.58725 5.19624 5.7651V8.19911C2.32862 8.21924 0 10.566 0 13.4519C0 16.0447 1.87982 18.2058 4.34208 18.6309V23.9508H25.9745V18.6309C28.4368 18.2047 30.3155 16.0447 30.3155 13.4519C30.3155 10.5671 27.9891 8.22036 25.1204 8.20022ZM10.9359 1.78971H19.3807C21.5634 1.78971 23.3396 3.57383 23.3396 5.76622V8.50447C21.5823 9.13199 20.2504 10.6711 19.9275 12.5582H10.3914C10.0673 10.6711 8.7365 9.13199 6.97918 8.50447V5.7651C6.97695 3.57271 8.75321 1.78971 10.9359 1.78971ZM25.0836 16.9183H24.1927V22.1622H6.1239V16.9183H5.23299C3.32978 16.9183 1.78071 15.3624 1.78071 13.4519C1.78071 11.5403 3.32978 9.98434 5.23299 9.98434C7.1362 9.98434 8.68527 11.5403 8.68527 13.4519V14.3468H21.6324V13.4519C21.6324 11.5403 23.1815 9.98434 25.0847 9.98434C26.9868 9.98434 28.5359 11.5403 28.5359 13.4519C28.5348 15.3624 26.9857 16.9183 25.0836 16.9183Z" fill="currentColor"/>
  </svg>

const Mebel = props => {
  const text = props.active ? 'отключить<br />мебель' : 'включить<br />мебель'
  return (
    <Button smallText outline primary leftIcon={<Icon />} {...props}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Button>
  )
}

export default Mebel