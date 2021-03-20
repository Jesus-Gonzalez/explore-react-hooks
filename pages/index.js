import { useMemo, useState } from "react"

export default function Home() {
  const [value, setValue] = useState('');

  const uppercasedValue = useMemo(() => value.toUpperCase(), [value]); // expensive computation

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChangeInput} />
      <div>
        <span>Uppercased:</span>
        <strong>{uppercasedValue}</strong>
      </div>
    </div>
  )
}
