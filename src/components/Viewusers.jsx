import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Viewusers = () => {
    const [load, changeLoad] = useState(true)
    const [user, changeUser] = useState([])
    const fetchdata = () => {
        axios.get("https://api.github.com/users").then(
            (req) => {
                changeLoad(false)
                changeUser(req.data)
            }
        ).catch(() => {
            alert("Something went wrong!!")
        }
        )
    }
    useEffect(() => { fetchdata() }, [])
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="table-responsive">
                            <table class="table align-middle table-bordered">
                                <thead>
                                    <tr class="table-dark" >
                                        <th scope="col">Id</th>
                                        <th scope="col">Node Id</th>
                                        <th scope="col">Avatar URL</th>
                                        <th scope="col">Gravatar URL</th>
                                        <th scope="col">URL</th>
                                        <th scope="col">Html URL</th>
                                        <th scope="col">Followers URL</th>
                                        <th scope="col">Following URL</th>
                                        <th scope="col">Gists UR</th>
                                        <th scope="col">Starred URL</th>
                                        <th scope="col">Subscriptions URL</th>
                                        <th scope="col">Organizations URL</th>
                                        <th scope="col">Repos URL</th>
                                        <th scope="col">Events URL</th>
                                        <th scope="col">Received Events URL</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">User View Type</th>
                                    </tr>
                                </thead>
                                {
                                    load ? (<div class="spinner-grow text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>) : (<tbody class="table-group-divider">
                                        {
                                            user.map(
                                                (value, index) => {
                                                    return (

                                                        <tr>
                                                            <th scope="row">{value.id}</th>
                                                            <td>{value.node_id}</td>
                                                            <td><img src={value.avatar_url} width="50"/></td>
                                                            <td>{value.gravatar_id}</td>
                                                            <td><a href={value.url} class="link-primary" target="blank">URL</a></td>
                                                            <td><a href={value.html_url} class="link-primary" target="blank">HTML URL</a></td>
                                                            <td><a href={value.followers_url} class="link-primary" target="blank">Followers URL</a></td>
                                                            <td><a href={value.following_url} class="link-primary" target="blank">Following URL</a></td>
                                                            <td><a href={value.gists_url} class="link-primary" target="blank">Gists URL</a></td>
                                                            <td><a href={value.starred_url} class="link-primary" target="blank"> Starred URL</a></td>
                                                            <td><a href={value.subscriptions_url} class="link-primary" target="blank">Subscription URL</a></td>
                                                            <td><a href={value.organizations_url} class="link-primary" target="blank">Organizations URL</a></td>
                                                            <td><a href={value.repos_url} class="link-primary" target="blank">Repos URL</a></td>
                                                            <td><a href={value.events_url} class="link-primary" target="blank">Events URL</a></td>
                                                            <td><a href={value.received_events_url} class="link-primary" target="blank">Received Events URL</a></td>
                                                            <td>{value.type}</td>
                                                            <td>{value.user_view_type}</td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                    </tbody>)
                                }
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Viewusers