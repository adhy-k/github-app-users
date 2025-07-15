import React, { useState } from 'react'
import Navbar from './Navbar'

const Adduser = () => {
    const[input,changeInput]=useState(
        { Id:"",NodeId:"",AvatarURL:"",GravatarURL:"",URL:"",HtmlURL:"",FollowersURL:"",FollowingURL:"",GistsURL:"",StarredURL:"",SubscriptionsURL:"",OrganizationsURL:"",ReposURL:"",EventsURL:"",ReceivedEventsURL:"",Type:"",UserViewType:""}
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readInput=()=>{
        console.log(input)
    }
  return (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='Id' value={input.Id} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Node Id</label>
                            <input type="text" className="form-control" name='NodeId' value={input.NodeId} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Avatar URL</label>
                            <input type="text" className="form-control" name='AvatarURL' value={input.AvatarURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gravatar URL</label>
                            <input type="text" className="form-control" name='GravatarURL' value={input.GravatarURL} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">URL</label>
                            <input type="text" className="form-control" name='URL' value={input.URL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Html URL</label>
                            <input type="text" className="form-control" name='HtmlURL' value={input.HtmlURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Followers URL</label>
                            <input type="text" className="form-control" name='FollowersURL' value={input.FollowersURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Following URL</label>
                            <input type="text" className="form-control" name='FollowingURL' value={input.FollowingURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gists URL</label>
                            <input type="text" className="form-control" name='GistsURL' value={input.GistsURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Starred URL</label>
                            <input type="text" className="form-control" name='StarredURL' value={input.StarredURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Subscriptions URL</label>
                            <input type="text" className="form-control" name='SubscriptionsURL' value={input.SubscriptionsURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Organizations URL</label>
                            <input type="text" className="form-control" name='OrganizationsURL' value={input.OrganizationsURL} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Repos URL</label>
                            <input type="text" className="form-control" name='ReposURL' value={input.ReposURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Events URL</label>
                            <input type="text" className="form-control" name='EventsURL' value={input.EventsURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Received Events URL</label>
                            <input type="text" className="form-control" name='ReceivedEventsURL' value={input.ReceivedEventsURL} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Type</label>
                            <input type="text" className="form-control" name='Type' value={input.Type} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User View Type</label>
                            <input type="text" className="form-control" name='UserViewType' value={input.UserViewType} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="button btn btn-primary" onClick={readInput}>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adduser