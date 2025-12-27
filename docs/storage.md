Storage Quickstart

Learn how to use Supabase to store and serve files.

This guide shows the basic functionality of Supabase Storage. Find a full example application on GitHub.

Concepts#
Supabase Storage consists of Files, Folders, and Buckets.

Files#
Files can be any sort of media file. This includes images, GIFs, and videos. It is best practice to store files outside of your database because of their sizes. For security, HTML files are returned as plain text.

Folders#
Folders are a way to organize your files (just like on your computer). There is no right or wrong way to organize your files. You can store them in whichever folder structure suits your project.

Buckets#
Buckets are distinct containers for files and folders. You can think of them like "super folders". Generally you would create distinct buckets for different Security and Access Rules. For example, you might keep all video files in a "video" bucket, and profile pictures in an "avatar" bucket.

File, Folder, and Bucket names must follow AWS object key naming guidelines and avoid use of any other characters.

Create a bucket#
You can create a bucket using the Supabase Dashboard. Since the storage is interoperable with your Postgres database, you can also use SQL or our client libraries. Here we create a bucket called "avatars":

Dashboard

SQL

JavaScript

Dart

Swift

Python
// Use the JS library to create a bucket.
const { data, error } = await supabase.storage.createBucket('avatars')
Reference.

Upload a file#
You can upload a file from the Dashboard, or within a browser using our JS libraries.

Dashboard

JavaScript

Dart
const avatarFile = event.target.files[0]
const { data, error } = await supabase.storage
.from('avatars')
.upload('public/avatar1.png', avatarFile)
Reference.

Download a file#
You can download a file from the Dashboard, or within a browser using our JS libraries.

Dashboard

JavaScript

Dart

Swift

Python
// Use the JS library to download a file.
const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')
Reference.

Add security rules#
To restrict access to your files you can use either the Dashboard or SQL.

Dashboard

SQL
-- Use SQL to create a policy.
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'public' );
