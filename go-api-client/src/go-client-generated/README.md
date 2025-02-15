# Go API client for swagger

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 0.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.go.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```golang
import "./swagger"
```

## Documentation for API Endpoints

All URIs are relative to */api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AttachmentApi* | [**CreateAttachment**](docs/AttachmentApi.md#createattachment) | **Post** /attachments | Create a new attachment on a log
*AttachmentApi* | [**GetAttachment**](docs/AttachmentApi.md#getattachment) | **Get** /attachments/{attachmentId} | Get one specific attachment
*DefaultApi* | [**GetDeployInformation**](docs/DefaultApi.md#getdeployinformation) | **Get** /status | Get deploy information
*DefaultApi* | [**GetServerInformation**](docs/DefaultApi.md#getserverinformation) | **Get** / | Get server information
*EnvironmentApi* | [**CreateEnvironment**](docs/EnvironmentApi.md#createenvironment) | **Post** /environments | Creation of the environment object.
*EnvironmentApi* | [**ListEnvironments**](docs/EnvironmentApi.md#listenvironments) | **Get** /environments | Fetches all the environments
*EnvironmentApi* | [**ReplaceEnvironment**](docs/EnvironmentApi.md#replaceenvironment) | **Put** /environments/{envId} | Update of the environment object.
*FlpApi* | [**CreateFlp**](docs/FlpApi.md#createflp) | **Post** /flps | Adds a new flp
*FlpApi* | [**GetFlpById**](docs/FlpApi.md#getflpbyid) | **Get** /flps/{flpName}/runs/{runNumber} | Gets a flp by Name
*FlpApi* | [**ListFlps**](docs/FlpApi.md#listflps) | **Get** /flps | List all flps
*FlpApi* | [**UpdateFlp**](docs/FlpApi.md#updateflp) | **Patch** /flps/{flpName}/runs/{runNumber} | Update an existing flp
*LogApi* | [**CreateLog**](docs/LogApi.md#createlog) | **Post** /logs | Adds a new log
*LogApi* | [**GetLogAttachment**](docs/LogApi.md#getlogattachment) | **Get** /logs/{logId}/attachments/{attachmentId} | Get one specific attachment associated with a log
*LogApi* | [**GetLogById**](docs/LogApi.md#getlogbyid) | **Get** /logs/{logId} | Gets a log by Id
*LogApi* | [**GetLogTree**](docs/LogApi.md#getlogtree) | **Get** /logs/{logId}/tree | Get the Log tree for a given Log
*LogApi* | [**ListLogAttachments**](docs/LogApi.md#listlogattachments) | **Get** /logs/{logId}/attachments | Get all attachments associated with a log
*LogApi* | [**ListLogs**](docs/LogApi.md#listlogs) | **Get** /logs | List all logs
*LogApi* | [**ListTagsByLogId**](docs/LogApi.md#listtagsbylogid) | **Get** /logs/{logId}/tags | Lists all tags associated with a log
*RunApi* | [**CreateRun**](docs/RunApi.md#createrun) | **Post** /runs | Creates a run
*RunApi* | [**GetRunById**](docs/RunApi.md#getrunbyid) | **Get** /runs/{runId} | Gets a run by Id
*RunApi* | [**ListRuns**](docs/RunApi.md#listruns) | **Get** /runs | List all runs
*RunApi* | [**UpdateRun**](docs/RunApi.md#updaterun) | **Patch** /runs/{runId} | Updates certain fields of a run
*SubsystemApi* | [**CreateSubsystem**](docs/SubsystemApi.md#createsubsystem) | **Post** /subsystems | Adds a new subsystem
*SubsystemApi* | [**DeleteSubsystem**](docs/SubsystemApi.md#deletesubsystem) | **Delete** /subsystems/{subsystemId} | Deletes a subsystem by Id
*SubsystemApi* | [**GetSubsystem**](docs/SubsystemApi.md#getsubsystem) | **Get** /subsystems/{subsystemId} | Get a subsystem by Id
*SubsystemApi* | [**ListSubsystems**](docs/SubsystemApi.md#listsubsystems) | **Get** /subsystems | List all subsystems
*TagApi* | [**CreateTag**](docs/TagApi.md#createtag) | **Post** /tags | Adds a new tag
*TagApi* | [**DeleteTagById**](docs/TagApi.md#deletetagbyid) | **Delete** /tags/{tagId} | Deletes a tag by Id
*TagApi* | [**GetLogsByTagId**](docs/TagApi.md#getlogsbytagid) | **Get** /tags/{tagId}/logs | Gets all logs with this tag id
*TagApi* | [**GetTagById**](docs/TagApi.md#gettagbyid) | **Get** /tags/{tagId} | Gets a tag by Id
*TagApi* | [**ListTags**](docs/TagApi.md#listtags) | **Get** /tags | List all tags

## Documentation For Models

 - [ApiInformation](docs/ApiInformation.md)
 - [ArrayOfAttachmentsResponse](docs/ArrayOfAttachmentsResponse.md)
 - [ArrayOfEnvironmentsResponse](docs/ArrayOfEnvironmentsResponse.md)
 - [ArrayOfEnvironmentsResponseMeta](docs/ArrayOfEnvironmentsResponseMeta.md)
 - [ArrayOfFlpsResponse](docs/ArrayOfFlpsResponse.md)
 - [ArrayOfFlpsResponseMeta](docs/ArrayOfFlpsResponseMeta.md)
 - [ArrayOfLogsResponse](docs/ArrayOfLogsResponse.md)
 - [ArrayOfLogsResponseMeta](docs/ArrayOfLogsResponseMeta.md)
 - [ArrayOfRunsResponse](docs/ArrayOfRunsResponse.md)
 - [ArrayOfRunsResponseMeta](docs/ArrayOfRunsResponseMeta.md)
 - [ArrayOfSubsystemsResponse](docs/ArrayOfSubsystemsResponse.md)
 - [ArrayOfSubsystemsResponseMeta](docs/ArrayOfSubsystemsResponseMeta.md)
 - [ArrayOfTagsResponse](docs/ArrayOfTagsResponse.md)
 - [Attachment](docs/Attachment.md)
 - [AttachmentResponse](docs/AttachmentResponse.md)
 - [CreateAttachments](docs/CreateAttachments.md)
 - [CreateEnvironment](docs/CreateEnvironment.md)
 - [CreateFlp](docs/CreateFlp.md)
 - [CreateLog](docs/CreateLog.md)
 - [CreateSubsystem](docs/CreateSubsystem.md)
 - [CreateTag](docs/CreateTag.md)
 - [DeployInformation](docs/DeployInformation.md)
 - [Detectors](docs/Detectors.md)
 - [Entity](docs/Entity.md)
 - [Environment](docs/Environment.md)
 - [EnvironmentResponse](docs/EnvironmentResponse.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [Errors](docs/Errors.md)
 - [FilterLogsCreatedOptions](docs/FilterLogsCreatedOptions.md)
 - [FilterLogsOptions](docs/FilterLogsOptions.md)
 - [FilterLogsTagOptions](docs/FilterLogsTagOptions.md)
 - [Flp](docs/Flp.md)
 - [FlpResponse](docs/FlpResponse.md)
 - [FlpSortOptions](docs/FlpSortOptions.md)
 - [Log](docs/Log.md)
 - [LogOrigin](docs/LogOrigin.md)
 - [LogResponse](docs/LogResponse.md)
 - [LogRuns](docs/LogRuns.md)
 - [LogSortOptions](docs/LogSortOptions.md)
 - [LogSubtype](docs/LogSubtype.md)
 - [LogTree](docs/LogTree.md)
 - [LogTreeResponse](docs/LogTreeResponse.md)
 - [ModelError](docs/ModelError.md)
 - [PaginationMeta](docs/PaginationMeta.md)
 - [PaginationOptions](docs/PaginationOptions.md)
 - [Run](docs/Run.md)
 - [RunOrigin](docs/RunOrigin.md)
 - [RunQuality](docs/RunQuality.md)
 - [RunResponse](docs/RunResponse.md)
 - [RunSortOptions](docs/RunSortOptions.md)
 - [RunType](docs/RunType.md)
 - [SortOrder](docs/SortOrder.md)
 - [Subsystem](docs/Subsystem.md)
 - [SubsystemResponse](docs/SubsystemResponse.md)
 - [Tag](docs/Tag.md)
 - [TagResponse](docs/TagResponse.md)
 - [UpdateEnvironment](docs/UpdateEnvironment.md)
 - [UpdateFlp](docs/UpdateFlp.md)
 - [User](docs/User.md)

## Documentation For Authorization

## ApiKeyAuth
- **Type**: API key 

Example
```golang
auth := context.WithValue(context.Background(), sw.ContextAPIKey, sw.APIKey{
	Key: "APIKEY",
	Prefix: "Bearer", // Omit if not necessary.
})
r, err := client.Service.Operation(auth, args)
```

## Author


