import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  name: 'pageBuilder',
  title: 'Page builder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'logoMarquee'}),
    defineArrayMember({type: 'metrics'}),
    defineArrayMember({type: 'serviceSplit'}),
    defineArrayMember({type: 'methodSteps'}),
    defineArrayMember({type: 'caseCards'}),
    defineArrayMember({type: 'insightCards'}),
    defineArrayMember({type: 'faqSection'}),
    defineArrayMember({type: 'ctaBanner'}),
    defineArrayMember({type: 'contactFormSection'}),
    defineArrayMember({type: 'narrativeCards'}),
    defineArrayMember({type: 'contentCards'}),
    defineArrayMember({type: 'splitStatement'}),
    defineArrayMember({type: 'serviceCatalog'}),
    defineArrayMember({type: 'processCards'}),
    defineArrayMember({type: 'serviceIncludes'}),
    defineArrayMember({type: 'relatedServices'}),
    defineArrayMember({type: 'aboutStory'}),
    defineArrayMember({type: 'worldMap'}),
    defineArrayMember({type: 'teamCards'}),
  ],
})
