interface Link {
  text: string
  to?: string
  href?: string
  icon?: string
  openInNew?: boolean
}

interface TitledLinks {
  title: string
  links: Link[]
}

interface BrandOptions {
  /**
   * The name of the brand.
   *
   * @default "@nuxtify/core"
   */
  name?: string
  /**
   * The domain of the brand.
   *
   * @default ""
   */
  domain?: string
  /**
   * The tagline of the brand.
   *
   * @default ""
   */
  tagline?: string
  /**
   * The logo of the brand.
   */
  logo?: {
    /**
     * The URL of the light logo. Recommended 5:1 aspect ratio (e.g. 400 x 80 px).
     *
     * @default ""
     */
    lightUrl?: string
    /**
     * The URL of the dark logo. Recommended 5:1 aspect ratio (e.g. 400 x 80 px).
     *
     * @default ""
     */
    darkUrl?: string
    /**
     * The width of the logo.
     *
     * @default 200
     */
    width?: number
    /**
     * The width of the logo on mobile.
     *
     * @default 160
     */
    mobileWidth?: number
    /**
     * The height of the logo.
     *
     * @default 50
     */
    height?: number
    /**
     * The height of the logo on mobile.
     *
     * @default 40
     */
    mobileHeight?: number
    /**
     * The format of the logo.
     *
     * @default "webp"
     */
    format?: 'webp' | 'avif' | 'jpeg' | 'jpg' | 'png' | 'gif' | 'svg'
  }
}

interface PoliciesOptions {
  privacyUrl: string
  termsUrl: string
}

export interface ModuleOptions {
  /**
   * Verbose logging
   */
  verboseLogs?: boolean

  /**
   * Brand options
   */
  brand?: BrandOptions

  /**
   * Policies options
   */
  policies?: PoliciesOptions

  /**
   * Announcement options
   */
  announcement?: {
    show?: boolean
    message?: string
    buttonText?: string
    buttonUrl?: string
    exclude?: string[]
  }

  /**
   * Navigation options
   */
  navigation?: {
    primary?: Link[]
    secondary?: Link[]
    altPrimary?: TitledLinks[]
    altSecondary?: Link[]
  }

  /**
   * Credits options
   */
  credits?: {
    creator?: {
      name?: string
      domain?: string
    }
    prependText?: string
    appendText?: string
    showPoweredBy?: boolean
  }

  /**
   * Email options
   */
  email?: {
    general?: string
    support?: string
  }
}
