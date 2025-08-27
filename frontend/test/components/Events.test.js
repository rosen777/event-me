import { describe, it, expect, beforeEach, vi } from 'vitest'
import { EventCard, EventModal, EventsSection } from '../../src/components/Events.js'

describe('Events', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('EventCard', () => {
        it('should render event card with basic information', () => {
            const event = {
                id: 1,
                host_id: 2,
                title: 'Test Event',
                date: '2024-12-25',
                host: { name: 'John Doe' },
                description: 'A test event',
                rsvps: [],
                image_url: 'https://example.com/image.jpg'
            }

            const result = EventCard(event)

            expect(result).toContain('Test Event')
            expect(result).toContain('John Doe')
            expect(result).toContain('A test event')
            expect(result).toContain('https://example.com/image.jpg')
            expect(result).toContain('0 went')
        })

        it('should handle missing optional fields', () => {
            const event = {
                id: 1,
                title: 'Test Event',
                date: '2024-12-25T10:00:00Z',
                host_id: 123,
                rsvps: [],
                image_url: 'http://image.web'
            }

            const result = EventCard(event)

            expect(result).toContain('Test Event')
            expect(result).toContain('User 123')
            expect(result).not.toContain('undefined')
        })

        it('should show past events correctly', () => {

            const event = {
                id: 1,
                host_id: 4,
                title: 'Past Event',
                date: '1995-01-01',
                host: { name: 'John Doe' },
                image_url: 'http://image.web',
                rsvps: [{}, {}] // 2 RSVPs
            }

            const result = EventCard(event);

            expect(result).toContain('2 went');
            expect(result).not.toContain('<button role="button" data-target="modal-event-1" ');
        })

        it('should show upcoming events with RSVP button', () => {
            const futureDate = new Date()
            futureDate.setDate(futureDate.getDate() + 1) // Tomorrow

            const event = {
                id: 1,
                host_id: 6,
                title: 'Future Event',
                date: futureDate.toISOString(),
                host: { name: 'John Doe' },
                image_url: 'http://image.web',
                rsvps: []
            }

            const result = EventCard(event)
            expect(result).toContain('0 going')
            expect(result).toContain('RSVP')
        })
    })

    describe('EventModal', () => {
        it('should render modal with correct form structure', () => {
            const event = {
                id: 1,
                title: 'Test Event',
                date: '2029-12-31',
                host_id: 1,
                image_url: 'http://image.web'
            }

            const result = EventModal(event)

            expect(result).toContain('modal-event-1')
            expect(result).toContain('rsvp-form-1')
            expect(result).toContain('RSVP to Test Event')
            expect(result).toContain('input type="text"')
            expect(result).toContain('input type="email"')
        })

    })

    describe('EventsSection', () => {
        it('should render section with events', () => {
            const events = [
                {
                    id: 1,
                    title: 'Event 1',
                    date: '2024-12-25T10:00:00Z',
                    host_id: 1,
                    host: { name: 'Host 1' },
                    image_url: 'http://image.web',
                    rsvps: []
                },
                {
                    id: 2,
                    host_id: 5,
                    title: 'Event 2',
                    date: '2024-12-26T10:00:00Z',
                    host: { name: 'Host 2' },
                    image_url: 'http://image.web',
                    rsvps: []
                }
            ]

            const result = EventsSection('Upcoming', events)

            expect(result).toContain('Upcoming events')
            expect(result).toContain('Event 1')
            expect(result).toContain('Event 2')
        })

        it('should handle empty events array', () => {
            const result = EventsSection('Past', [])

            expect(result).toContain('Past events')
            expect(result).toContain('No events')
        })
    })
})
