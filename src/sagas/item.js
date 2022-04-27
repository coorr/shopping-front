import axios from 'axios';
import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { 
  ADD_ITEM_FAILURE, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, 
  GET_ITEM_FAILURE, GET_ITEM_FIRST_FAILURE, GET_ITEM_FIRST_REQUEST, 
  GET_ITEM_FIRST_SUCCESS, GET_ITEM_ONE_FAILURE, GET_ITEM_ONE_REQUEST, 
  GET_ITEM_ONE_SUCCESS, GET_ITEM_REQUEST, GET_ITEM_SUCCESS, REMOVE_ITEM_FAILURE, REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REVISED_ITEM_FAILURE, 
  REVISED_ITEM_REQUEST, REVISED_ITEM_SUCCESS, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_REQUEST, 
  UPLOAD_IMAGE_SUCCESS
} from '../reducers/item';
import ItemService from '../../service/item/Item.service'
import TokenCheck from '../store/tokenCheck';



function* addRevisedItem(action) {
  try {
    const result =  yield ItemService.revisedItem(action.data);
    alert("저장 되었습니다.")
    yield put({       
      type: REVISED_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: REVISED_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* addItem(action) {
  try {
    const result =  yield ItemService.insertItemAll(action.data);
    alert("저장 되었습니다.")
    yield put({       
      type: ADD_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: ADD_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* getItemFirst(action) {
  try {
    const result =  yield ItemService.selectItemAll(action.data !== undefined ? action.data.lastId : 0 , 
                                                  action.data !== undefined ? action.data.size : 30);
    yield put({       
      type: GET_ITEM_FIRST_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_FIRST_FAILURE,
      error : err.response.data
    })
  }  
}


function* getItem(action) {
  try {
    const result =  yield ItemService.selectItemAll(action.data !== undefined ? action.data.lastId : 0 , 
                                                  action.data !== undefined ? action.data.size : 30);
    yield put({       
      type: GET_ITEM_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_FAILURE,
      error : err.response.data
    })
  }  
}

function* getItemOne(action) {
  try {
    const result =  yield ItemService.getItemOne(action.data);
    yield put({       
      type: GET_ITEM_ONE_SUCCESS, 
      data: result.data
    }) 
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: GET_ITEM_ONE_FAILURE,
      error : err.response.data
    })
  }  
}

function* removeItem(action) {
  try {
    yield ItemService.removeItem(action.data);
    const history = action.history;
    yield put({       
      type: REMOVE_ITEM_SUCCESS, 
    }) 
    alert("삭제되었습니다.")
    history.push('/');
  } catch (err) {
    TokenCheck(err.response.data)
    yield put({
      type: REMOVE_ITEM_FAILURE,
      error : err.response.data
    })
    alert("실패하였습니다.")
  }  
}



function* watchAddItem() {
  yield takeLatest(ADD_ITEM_REQUEST, addItem);
}
function* watchRevisedAddItem() {
  yield takeLatest(REVISED_ITEM_REQUEST, addRevisedItem);
}
function* watchGetFirstItem() {
  yield takeLatest(GET_ITEM_FIRST_REQUEST, getItemFirst);
}
function* watchGetItem() {
  yield takeLatest(GET_ITEM_REQUEST, getItem);
}
function* watchGetItemOne() {
  yield takeLatest(GET_ITEM_ONE_REQUEST, getItemOne);
}
function* watchRemoveItem() {
  yield takeLatest(REMOVE_ITEM_REQUEST, removeItem);
}


export default function* userSage() {
    yield all([
      fork(watchAddItem),
      fork(watchRevisedAddItem),
      fork(watchGetFirstItem),
      fork(watchGetItem),
      fork(watchGetItemOne),
      fork(watchRemoveItem),
    ])
  }