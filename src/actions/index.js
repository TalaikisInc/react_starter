export const test_action = () => {
  return {
    type: 'TEST_ACTION',
    payload: { }
  }
}

export const setProgressBar = (isOpen) => ({
  type: 'SET_PROGRESS_BAR',
  isOpen: isOpen
})
