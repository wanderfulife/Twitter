import React from 'react'
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
	<div>
	  <img className='h-10 w-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAATlBMVEX///9Vre5Qq+5Kqe1Dp+3w9/35/P5wuPDc7Pt8vfFjs+89pezM5Pn0+f6n0fXi7/u52veZyvTT5/qHwvLp8/yv1faNxfLB3vgxouyezfTYA8ewAAADqElEQVR4nO2a2ZajIBBAhSIii7uJnf//0XEZu20jUpZkcuYc7kP3Q4y5KaqgwCRJJBKJRCKRSCQSiUQi/ztpfrvlHzXIilZqraWqbfoZg1vBDOecMTb8FeKRbV7Pm7crpAUAW8NBlWvFuyidb3aTb7/KEaUUbAtn1bdCoY0kOCQVdOhrreAvDgOmHl9M+1YAA9JoAOfYNO+/9hQGRNsMMYDBEGqKQ2YY1zgL+zoUP5kBc4z0jSJRj/oSY9E5FVYDQ8nKJJVTsWFiIcHrIOaEOJPqI7c5ipx7s7N3D8YyJmx06KyufPfa0Jn1DY6Qu4WxdpBd0t2V/nqcdBjzcgnl/fDCxhwJTDwVDBUC+qzDSmKos6PMbn2BGMd0Cun5dW0lwUC7h+SmvQ6zCDublclPTsx3MM7hzPylMd0BCA5LdXwHQzgy218b09sZaa5Kt0k/jMlej3DHRAIkfhn6Rb1NOC6Ufb3siZCAmtri7JQeN7rahrXGRIKoMLBXehx42/wqNVQk6BKO0eZCtzb/jm+FkBB0idR5Uy6MrKtsikiDqI4LkThqE8Y+QQihVf2Sv3tckPAnHZ+7a99VlyRSjfmafglSiztSjtNLiuhXEBItVaISzzJN0kcAC/6kSlgDIB9Vg1ipfcBxQ3JAaca8E/v7iZMSO7M9jtv1D1/gpE57JFVBKmOSoDokSRGiMCYHcoUO+2HX1u4s9LxMUB0sTuLKuUQWSIK2C12oUe2jD/p8OZF791YYDHmWmOmCrBxXz/Ky6xMmP70BfaG8vJibAGd2nbo4JBemyxXVcuBDAs4eSTg1pKGHI8ARczr19nn2JAZDFNcdkrRVbdsq5PZ/h0uz5cLd4DrqfSBEIIaRIMdgJExp4LZ5zkD0gSQS+nR1pZvZgDmvdUgQT0b2aIgD4jl6PIklNXpchXQYFlN2Pi/wzymwdO3pNZ2/4YmX1eeWMdeJ40WaWhiBNTHkPbCXsi8eKAu43k4dacjPO9xR+SmuNfnHWIaatgTpuR+OTOGyMtDyvYdVuJmC009EPDRPbnC1CTrgorWQdlnfMmxrxYMOhW3roijqh5Ia8BM2aMrTHTel/Bpmx1PdJYRduicyhUyDvwqc/GDlkEZxbDsjWP2GhJzJaoOYG8Cwe5DthZO+BXOQGRyMrsOm4y65fUi+s4aPx71aFeW/+hlRWtpCjQ83hoIBmP5xPj77eVsiuFW6zPZ9VfW9zcrP/p4rEolEIpFIJBKJRCKRSBj+AKFgJFRzPgusAAAAAElFTkSuQmCC" alt='' />
	  <SidebarRow Icon={HomeIcon} title="Home" />
	  <SidebarRow Icon={HashtagIcon} title="Explore" />
	  <SidebarRow Icon={BellIcon} title="Notifications" />
	  <SidebarRow Icon={MailIcon} title="Messages" />
	  <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
	  <SidebarRow Icon={CollectionIcon} title="Lists" />
	  <SidebarRow Icon={UserIcon} title="Sign In" />
	  <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
	</div>
  )
}

export default Sidebar
