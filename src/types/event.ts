import { type ShortDocument } from './document'
import { type SourceLink, type CategoryFilterItem, type SimpleLinkType } from './global'
import { type PathwayItem } from './location'
import { type CardNewsItem } from './news'
import { type ImageItem, type ImageItemWithText } from './photos'
import { type ProgramDay } from './program'
import { type VideoItem } from './videos'

export type EventDocumentItem = {
	id: string
	name: string
	url: string
}

export type EventPartnerItem = {
	id: string
	link: string
	title: string
	mainphoto: ImageItemWithText[]
}

export type EventAward = {
	id: string
	datename: string
	datetext: string
}

export type EventAwardResponse = {
	dates: EventAward[]
}

export type EventFaq = {
	id: string
	title: string
	content: string
}

export type EventItem = {
	ageRating: string
	status: 'cancel' | 'current' | 'future' | 'finished'
	description: string
	date: [Date, Date] | [Date]
	sections: string[]
	mainBrand: SimpleLinkType
	object: { id: string; title: string }
	site: SimpleLinkType
	brandImg: string
	partnerImg: string
	pathways: PathwayItem[]
	placement: PathwayItem[]
	faq: Array<{ title: string; content: string }>
	program: ProgramDay[]
	descs: string[]
	sideDocs: ShortDocument[]
	organizerLinks: SimpleLinkType[]
	partnerLinks: SimpleLinkType[]
	partnerGeneralLinks: SimpleLinkType[]
	news: CardNewsItem[]
	videos: VideoItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
	documents?: EventDocumentItem[]
	partners?: EventPartnerItem[]
	raspisanie?: string
	conditions?: string
	event_type_name?: string
	event_level_name?: string
	website?: string
	contact_email?: string
	contact_telphone?: string
	contact_tg?: string
} & Omit<CardEventItem, 'date'>

export type CardEventItem = {
	id: string
	mainphoto: ImageItemWithText[]
	title: string
	status: 'cancel' | 'current' | 'future' | 'finished'
	category: CategoryFilterItem
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
	brand: {
		id: string
		title: string
	}
}
