import { NextResponse } from 'next/server';

import { courseCodes } from '@/domain/courseCode';
import { apiBaseUrl, siteUrl } from '@/lib/siteUrl';
import type { RouteHandler } from '@/serverComponent';

const nullableString = { type: [ 'string', 'null' ] };

const errorResponse = (description: string): Record<string, unknown> => ({
  description,
  content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } },
});

const plan = {
  type: 'object',
  properties: {
    discount: { type: 'number', description: 'The discount for choosing this payment plan' },
    deposit: { type: 'number', description: 'The amount due at enrollment' },
    installments: { type: 'integer', description: 'The number of monthly installments after the deposit' },
    installmentSize: { type: 'number', description: 'The size of each installment' },
    total: { type: 'number', description: 'The total tuition paid under this plan' },
  },
  required: [ 'discount', 'deposit', 'installments', 'installmentSize', 'total' ],
};

const courseCodeParameter = {
  name: 'courseCode',
  in: 'path',
  required: true,
  description: 'The course code',
  schema: { $ref: '#/components/schemas/CourseCode' },
};

const spec = {
  openapi: '3.1.0',
  info: {
    title: 'QC Design School Course API',
    version: '1.0.0',
    description: 'Read-only information about QC Design School online courses, including current tuition by country.',
    contact: { name: 'QC Design School', url: `${siteUrl}/contact-us` },
  },
  servers: [ { url: apiBaseUrl } ],
  externalDocs: { url: `${siteUrl}/api-docs` },
  paths: {
    '/courses': {
      get: {
        operationId: 'listCourses',
        summary: 'List all courses',
        responses: {
          200: {
            description: 'The list of courses',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { courses: { type: 'array', items: { $ref: '#/components/schemas/Course' } } },
                  required: [ 'courses' ],
                },
              },
            },
          },
        },
      },
    },
    '/courses/{courseCode}': {
      get: {
        operationId: 'getCourse',
        summary: 'Get a course',
        parameters: [ courseCodeParameter ],
        responses: {
          200: { description: 'The course', content: { 'application/json': { schema: { $ref: '#/components/schemas/Course' } } } },
          404: errorResponse('Course not found'),
        },
      },
    },
    '/courses/{courseCode}/tuition': {
      get: {
        operationId: 'getCourseTuition',
        summary: 'Get current tuition for a course',
        description: 'Tuition varies by country and changes with current promotions. When no country is given, the location of the requester is used.',
        parameters: [
          courseCodeParameter,
          { name: 'country', in: 'query', required: false, description: 'ISO 3166-1 alpha-2 country code, e.g. US', schema: { type: 'string', pattern: '^[A-Za-z]{2}$' } },
          { name: 'province', in: 'query', required: false, description: 'ISO 3166-2 subdivision code without the country prefix, e.g. ON', schema: { type: 'string' } },
        ],
        responses: {
          200: { description: 'The tuition', content: { 'application/json': { schema: { $ref: '#/components/schemas/Tuition' } } } },
          400: errorResponse('Invalid country or province'),
          404: errorResponse('Course not found'),
          502: errorResponse('Tuition is temporarily unavailable'),
        },
      },
    },
  },
  components: {
    schemas: {
      CourseCode: { type: 'string', enum: courseCodes },
      Course: {
        type: 'object',
        properties: {
          code: { $ref: '#/components/schemas/CourseCode' },
          name: { type: 'string' },
          url: { type: 'string', format: 'uri', description: 'The course page' },
          description: nullableString,
          certification: { ...nullableString, description: 'The professional designation earned on completion' },
          subjects: { type: [ 'array', 'null' ], items: { type: 'string' } },
          workload: nullableString,
          tuitionUrl: { type: 'string', format: 'uri' },
        },
        required: [ 'code', 'name', 'url', 'description', 'certification', 'subjects', 'workload', 'tuitionUrl' ],
      },
      Tuition: {
        type: 'object',
        properties: {
          courseCode: { $ref: '#/components/schemas/CourseCode' },
          countryCode: { type: 'string' },
          provinceCode: nullableString,
          currency: {
            type: 'object',
            properties: { code: { type: 'string' }, symbol: { type: 'string' }, name: { type: 'string' } },
            required: [ 'code', 'symbol', 'name' ],
          },
          cost: { type: 'number', description: 'The base tuition before discounts' },
          promoDiscount: { type: 'number', description: 'Any current promotional discount' },
          plans: {
            type: 'object',
            properties: {
              full: { ...plan, description: 'Pay in full' },
              part: { ...plan, description: 'Pay a deposit followed by monthly installments' },
            },
            required: [ 'full', 'part' ],
          },
          disclaimers: { type: 'array', items: { type: 'string' } },
          notes: { type: 'array', items: { type: 'string' } },
        },
        required: [ 'courseCode', 'countryCode', 'provinceCode', 'currency', 'cost', 'promoDiscount', 'plans', 'disclaimers', 'notes' ],
      },
      Error: {
        type: 'object',
        properties: { error: { type: 'string' } },
        required: [ 'error' ],
      },
    },
  },
};

export const GET: RouteHandler = () => {
  return NextResponse.json(spec);
};
