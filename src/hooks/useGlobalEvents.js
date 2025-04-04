import { useEffect } from 'react'
import { isFunction } from '../utils/typeUtils'
import { onEntries } from '../utils/generalUtils'
import GlobalState from '../utils/GlobalState'

/**
 * Custom hook to handle event listener addition for GlobalState.
 * @param {string} instanceName - The name of the GlobalState instance.
 * @param {Object} listeners - A dictionary where keys are event names and values are listener functions.
 */
const useGlobalEvents = (instanceName, listeners = {}) => {
  const instance = GlobalState.get(instanceName)

  useEffect(() => {
    onEntries(listeners, (name, cb) => {
      isFunction(cb) && instance.on(name, cb)
    })

    return () => {
      onEntries(listeners, (name, listener) => {
        isFunction(listener) && instance.off(name, listener)
      })
    }
  }, [instance, listeners])

  return instance
}

export default useGlobalEvents
