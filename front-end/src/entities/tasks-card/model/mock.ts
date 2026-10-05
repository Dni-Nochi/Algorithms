import type { TasksCardConfig } from '@/entities/tasks-card/model/types';

export const TASKS: TasksCardConfig[] = [
  {
    title: 'Two Sum',
    description:
      'You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    taskId: 1,
    solved: true,
  },
  {
    title: 'Add Two Numbers',
    description:
      'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.',
    taskId: 2,
    solved: false,
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    description:
      'Given a string s, find the length of the longest substring without duplicate characters.',
    taskId: 3,
    solved: false,
  },
  {
    title: 'Median of Two Sorted Arrays',
    description:
      'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
    taskId: 4,
    solved: false,
  },
  {
    title: 'Longest Palindromic Substring',
    description:
      'Given a string s, return the longest palindromic substring in s.',
    taskId: 5,
    solved: false,
  },
  {
    title: 'Search Insert Position',
    description:
      'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.',
    taskId: 35,
    solved: true,
  },
  {
    title: 'Best Time to Buy and Sell Stock',
    description:
      'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
    taskId: 121,
    solved: true,
  },
];
