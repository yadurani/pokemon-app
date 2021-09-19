import { useState } from 'react'
import { getDataLocal } from 'helpers'

import Msg from 'constants/messages'

const useLocalStorage = (key) => {
	const [storeValue, setValue] = useState(() => getDataLocal(key))
	const [error, setError] = useState(false)

	const setlocalStorage = (value) => {
    const list = [...storeValue]
    const isFavorite = list.findIndex((item) => item.name === value.name)
    if(isFavorite >= 0) {
      list.splice(isFavorite, 1)
    } else {
      list.push(value)
    }
		try {
			window.localStorage.setItem(key, JSON.stringify(list))
			setValue(list)
		} catch (err) {
			setError(Msg.Error)
		}
	}
	return [storeValue, setlocalStorage, error]
}

export default useLocalStorage
