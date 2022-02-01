import postApi from './api/postApi'

function renderPostList(data) {
  console.log(data)
}

;(async () => {
  try {
    const queryParams = {
      _page: 1,
      _limit: 10,
    }

    const data = await postApi.getAll(queryParams)
    renderPostList(data)
  } catch (error) {
    console.log(error)
  }
})()
