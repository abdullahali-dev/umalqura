import UmAlQura from './UmAlQura';

/**
 * Initializes UmAlQura instance using current date and time.
 */
function umalqura(): UmAlQura;
/**
 * Initializes UmAlQura instance using the specified date and time.
 * @param {Date} date The date
 */
function umalqura(date: Date): UmAlQura;
/**
 * Initializes UmAlQura instance using the specified Hijri year, month and day.
 * @param {number} hy The Hijri year
 * @param {number} hm The Hijri month
 * @param {number} hd The Hijri day
 */
function umalqura(hy: number, hm: number, hd: number): UmAlQura;
function umalqura(dateOrHy?: Date | number, hm?: number, hd?: number): UmAlQura {
    if (dateOrHy instanceof Date) {
        return new UmAlQura(dateOrHy);
    } else if (dateOrHy !== undefined && hm !== undefined && hd !== undefined) {
        return new UmAlQura(dateOrHy, hm, hd);
    } else {
        return new UmAlQura();
    }
}

umalqura.VERSION = "0.0.0-DEV_BUILD";

export default umalqura;
