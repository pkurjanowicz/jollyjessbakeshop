


brownieItem = (queryValue) => {
    const queryValue = urlParams.get('item');
    return location.href = `/?item=${queryValue}`;
}