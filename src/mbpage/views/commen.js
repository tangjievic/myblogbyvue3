const goPage = (router, name, query) => {
    router.push({
        name: name,
        query: query ? query : ''
    })
}

export {
    goPage
}