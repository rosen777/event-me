import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setupThemeToggle } from '../../src/components/Header.js'

// Mock DOM elements
const mockDocument = {
    documentElement: {
        getAttribute: vi.fn(),
        setAttribute: vi.fn()
    },
    getElementById: vi.fn()
}

global.document = mockDocument

describe('Header', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('toggleDarkMode', () => {
        it('should toggle from dark to light theme', () => {
            // Setup: current theme is dark
            mockDocument.documentElement.getAttribute.mockReturnValue('dark')

            const mockElement = {
                addEventListener: vi.fn()
            }
            mockDocument.getElementById.mockReturnValue(mockElement)

            // Get the toggle function by setting up the event listener
            setupThemeToggle()
            const clickHandler = mockElement.addEventListener.mock.calls[0][1]

            // Execute the toggle function
            clickHandler()

            expect(mockDocument.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light')
        })

        it('should toggle from light to dark theme', () => {
            // Setup: current theme is light
            mockDocument.documentElement.getAttribute.mockReturnValue('light')

            const mockElement = {
                addEventListener: vi.fn()
            }
            mockDocument.getElementById.mockReturnValue(mockElement)

            setupThemeToggle()
            const clickHandler = mockElement.addEventListener.mock.calls[0][1]

            clickHandler()

            // This should work correctly
            expect(mockDocument.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark')
        })


        describe('setupThemeToggle', () => {
            it('should add click event listener to theme toggle button', () => {
                const mockElement = {
                    addEventListener: vi.fn()
                }
                mockDocument.getElementById.mockReturnValue(mockElement)

                setupThemeToggle()

                expect(mockDocument.getElementById).toHaveBeenCalledWith('theme')
                expect(mockElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function))
            })
        })
    })
});