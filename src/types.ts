/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductConfig {
  productName: string;
  headlineSubtitle: string;
  persuasiveText: string;
  originalPrice: number;
  promoPrice: number;
  countdownMinutes: number;
  warrantyDays: number;
  bonusTitle: string;
  bonusDescription: string;
  videoTitle: string;
  checkoutUrlBasico: string;
  checkoutUrlCompleto: string;
}

export interface SampleChapter {
  id: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  pagesCount: number;
}
