export const getLabelMap = async (list, selector) => {
  let label
  list.map(async (e) => {
    if (e.value === selector) {
      label = e.label
    }
  })
  return label
}

export const getValueMap = async (list, selector) => {
  let value
  list.map(async (e) => {
    if (e.label === selector) {
      value = e.value
    }
  })
  return value
}
