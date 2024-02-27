//helper util logic...

export const removeFromDom = (data, id) => {
    return data.filter(item => item?.id !== id)
}